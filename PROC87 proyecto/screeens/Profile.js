import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import AppLoading from 'expo-app-loading';
import firebase from 'firebase';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            fontsLoaded:false,
            isEnabled:false,
            light_theme:true,
            profile_image:'',
            name:''    
        };
    }

    toggleSwich(){
        const previous_state=this.state.isEnabled;
        const theme=!this.state.isEnabled?"dark":"light"
        var updates={}
        updates["/users/"+firebase.auth().currentUser.uid+"current_theme"]=theme
        firebase
        .database()
        .ref()
        .update(updates)
        this.setState({isEnabled:!previous_state,light_theme:previous_state})
    };

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.state({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
      }

      fetchUser = () => {
        let theme
        firebase
            .database()
            .ref('/users/' + firebase.auth().currentUser.uid)
            .on('value',(snapshot)=>{
                theme=snapshot.val().current_theme
                this.setState({light_theme:theme==="light"})
            })

        this.setState({
          light_theme:theme==='light'?true:false,
          isEnabled:theme==='light'?false:true,
          name:name,
          profile_image:image
        });
      }
      
    render() {
        if(!this.state.fontsLoaded){
            return <AppLoading/>
        } else{
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Button
                        title="Sing in with Google"
                        onPress={() => this.signInWithGoogleAsync()}> 
                    </Button>
                    <Text>Perfil</Text>
                </View>
            );
        } 
    }
}