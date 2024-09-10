import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "../Components/HomePage";
import AboutPage from "../Components/AboutPage";
import ContactPage from "../Components/ContactPage";
import SettingPage from "../Components/SettingPage";
import Bottomnavigation from "./Bottomnavigation";
import Bottomnavigationbar from "../Components/BottomNavigationbar";
import BottomNavigationBar from "./BottomNavigationBar";

const Stack = createStackNavigator()

const Stacknavigation = ()=>{
    return(
        <>
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="Bottomnavigation" component={BottomNavigationBar}/>
        </Stack.Navigator>
        </>
    )
}
export default Stacknavigation