import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from '../Navigation/DrawerNavigator';

export default function dashboardScreen(){
  return(
    <NavigationContainer>
    <DrawerNavigator/>
    </NavigationContainer>
  );
}