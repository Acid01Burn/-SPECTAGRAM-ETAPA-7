import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

export default class loadingScreen extends Component{
    componentDidMount(){
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn=()=>{
        firebase.auth().onAuthStateChange((user)=>{
            if(user){
                this.props.navigation.navigate("PantalladePanel")
            } else {
                this.props.navigation.navigate("PantalladeIniciodeSesión")
            }
        });
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size="large"/>
                <Text> Cargando ._. </Text>
            </View>    
        );
    }
}