import * as React from 'react';
import { createSwichNavigator, createAppContainer } from 'react-navigation';
import loginScreen from './screeens/loginScreen';
import loadingScreen from './screeens/loadingScreen';
import dashboardScreen from './screeens/dashboardScreen';
import * as firebase from 'firebase';
import {firebaseConfig} from './config';

if(!firebase.apps.length){
  firebase.initilizeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwichNavigator = createSwichNavigator({
  loadingScreen:loadingScreen,
  loginScreen:loginScreen,
  dashboardScreen:dashboardScreen
});

const AppNavigator = createAppContainer(AppSwichNavigator)

export default function App() {
  return (
    <AppNavigator/>
  );
}