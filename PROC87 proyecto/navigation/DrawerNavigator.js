import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import Logout from "../screeens/Logout";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={TabNavigator} />
            <Drawer.Screen name="Perfil" component={Profile} />
            <Drawer.Screen name="cerrar sesion" component={Logout}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;