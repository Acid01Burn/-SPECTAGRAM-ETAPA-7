import React, {Component} from 'react';
import {View, Button, Image, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

export default class loginScreen extends Component{
    signInWithGoogleAsync=async()=>{
        try{
            const result=await Google.longInAsync({
                behaviour:"web",
                androidClientId:
                "512716633783-rkrc8tpbrknrpnt0akjbqqo0v4ukafkc.apps.googleusercontent.com",
                iosClientId:
                "512716633783-n6qco4smqeh9g64ffalebfrsepq0nvlf.apps.googleusercontent.com",
                scopes:['profile','email'],
            });
        }
    }
    render(){
        return(
            <View style={StyleSheet.container}>
            <SafeAreaView style={styles.droidSafeArea}/>  
            <View style={styles.appTitle}>
            <Image source={require("../assests/logo.png")}
            style={styles.appIcon}> </Image>
            <Text style={styles.appTitleText}> {'Spectagram'} </Text>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}
            onPress={() => this.signInWithGoogleAsync()}>
            <Image source={require("../assests/llogo.png")}
            style={styles.googleIcon}> </Image>
            <Text style={styles.googleText}> Iniciar sesion con Google </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.cloudContainer}>
            <Image source={require("../assests/post.jpeg"}
            style={styles.cloudImage}>
            </Image>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    buttonContainer:{
      flex:0.3,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:RFValue(250),
      height:RFValue(50),
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      borderRadius:RFValue(30),
      backgroundColor:'white'
    },
    googleIcon:{
      width:RFValue(30),
      height:RFValue(30),
      resizeMode:'contain'
    },
    googleText:{
      color:'black',
      fontSize:RFValue(20),
      fontFamily:'Bubblegum-Sans'
    },
    cloudContainer:{
      felx:0.3
    },
    cloudImage:{
      position:'absolute',
      width:'100%',
      resizeMode:'contain',
      bottom: RFValue(-5)
    }
  });