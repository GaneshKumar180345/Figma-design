import React, { useRef, useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "../Components/HomePage";
import AboutPage from "../Components/AboutPage";
import ContactPage from "../Components/ContactPage";
import SettingPage from "../Components/SettingPage";
import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";
import DetailPage from "../Components/DetailPage";


const Bottom = createBottomTabNavigator()



const Bottomnavigation = ()=>{



    return(
        <>
        <Bottom.Navigator screenOptions={{
            headerShown : false,
            tabBarShowLabel : false,
            tabBarStyle : styles.tabbarstyles
        }}>
            <Bottom.Screen name="Home" component={HomePage} options={{
                
                tabBarIcon :()=>(
                    <TouchableOpacity>
                        <Image style={styles.bottomnavigationicon1} source={require('../Assests/iconimages/bottomnavigation1.png')} />
                    </TouchableOpacity>
                )
            }}  />
            <Bottom.Screen name="About" component={AboutPage} options={{
                tabBarIcon :()=>(
                    <TouchableOpacity>
                        <Image style={styles.bottomnavigationicon2} source={require('../Assests/iconimages/bottomnavigation2.png')} />
                    </TouchableOpacity>
                    
                )
            }} />
            <Bottom.Screen name="Detail" component={DetailPage} options={{
                tabBarIcon :()=>(
                    <TouchableOpacity>
                        <Image style={styles.bottomnavigationicon3} source={require('../Assests/iconimages/bottomnavigation3.png')}/>
                    </TouchableOpacity> 
                    
                )
            }} />
            <Bottom.Screen name="Contact" component={ContactPage} options={{
                tabBarIcon :()=>(
                    <TouchableOpacity>
                        <Image style={styles.bottomnavigationicon4} source={require('../Assests/iconimages/bottomnavigation4.png')} />
                    </TouchableOpacity>
                     
                )
            }}/>
            <Bottom.Screen name="Setting" component={SettingPage} options={{
                tabBarIcon :()=>(
                    <TouchableOpacity>
                        <Image style={styles.bottomnavigationicon5} source={require('../Assests/iconimages/bottomnavigation5.png')} />
                    </TouchableOpacity>
                )
            }} />
        </Bottom.Navigator>
        </>
    )
}
export default Bottomnavigation;

const styles = StyleSheet.create({
    bottomnavigationicon1 : {
        width : 21.13,
        height : 21.02,
    
    },
    bottomnavigationicon2:{
        width : 20.73,
        height : 20.73
    },
    bottomnavigationicon4 : {
        width : 17.27,
        height : 20.72
    },
    bottomnavigationicon5 :{
        width : 23.12,
        height : 19.82
    },
    bottomnavigationicon3 :{
        width : 35,
        height : 35,
    },
    tabbarstyles :{
        height : 60,
        position : 'static',
        bottom : 25,
        right : 16,
        borderRadius : 16,
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : 0.5,
        borderColor : '#dadada'
    }
})
