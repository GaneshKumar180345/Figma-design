import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import HomePage from "../Components/HomePage";
import AboutPage from "../Components/AboutPage";
import DetailPage from "../Components/DetailPage";
import ContactPage from "../Components/ContactPage";
import SettingPage from "../Components/SettingPage";
import { Image, StyleSheet, TouchableOpacity, useColorScheme, View } from "react-native";
import * as Animatable from 'react-native-animatable';

const Bottom = createBottomTabNavigator()
const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

    const TabButton = (props)=>{
        const { item, onPress, accessibilityState } = props;
        const focused = accessibilityState.selected;
        
        const viewRef = useRef(null);
        const circleRef = useRef(null);
        


        useEffect(()=>{
            if(focused){
                viewRef.current.animate(animate1)
                circleRef.current.animate(circle1)
            }else {
                viewRef.current.animate(animate2)
                circleRef.current.animate(circle2)
            }
        },[focused])

        return (
            <TouchableOpacity onPress={onPress} style={styles.container} >
                <Animatable.View ref={viewRef} duration={1000}>
                <Image source={require('../Assests/iconimages/bottomnavigation1.png')} style={styles.bottomnavigationicon1}/>
                    <Animatable.View ref={circleRef} style={styles.circle}  >

                    </Animatable.View>
                </Animatable.View>
            </TouchableOpacity>
        )
    }

    const TabButton2 = (props)=>{
        const { item, onPress, accessibilityState } = props;
        const focused = accessibilityState.selected;
        const viewRef = useRef(null);
        const circleRef = useRef(null);

        useEffect(()=>{
            if(focused){
                viewRef.current.animate(animate1)
                circleRef.current.animate(circle1)
            }else {
                viewRef.current.animate(animate2)
                circleRef.current.animate(circle2)
            }
        },[focused])

        return (
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Animatable.View ref={viewRef} duration={1000}>
                <Image source={require('../Assests/iconimages/bottomnavigation2.png')} style={styles.bottomnavigationicon2}/>
                <Animatable.View ref={circleRef} style={styles.circle}>

                </Animatable.View>
                </Animatable.View>
            </TouchableOpacity>
        )

    }
    
    const TabButton3 = (props)=>{
        const { item, onPress, accessibilityState } = props;
        const focused = accessibilityState.selected;
        const viewRef = useRef(null);
        const circleRef = useRef(null);

        useEffect(()=>{
            if(focused){
                viewRef.current.animate(animate1)
                circleRef.current.animate(circle1)
            }else {
                viewRef.current.animate(animate2)
                circleRef.current.animate(circle2)
            }
        },[focused])

return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Animatable.View ref={viewRef} duration={1000}>
            <Image source={require('../Assests/iconimages/bottomnavigation3.png')} style={styles.bottomnavigationicon3} />
            <Animatable.View ref={circleRef} style={styles.circle}>

            </Animatable.View>
        </Animatable.View>
    </TouchableOpacity>
)

    }

    const TabButton4 =(props)=>{
        const { item, onPress, accessibilityState } = props;
        const focused = accessibilityState.selected;
        const viewRef = useRef(null);
        const circleRef = useRef(null);

        useEffect(()=>{
            if(focused){
                viewRef.current.animate(animate1)
                circleRef.current.animate(circle1)
            }else {
                viewRef.current.animate(animate2)
                circleRef.current.animate(circle2)
            }
        },[focused])

        return(
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Animatable.View ref={viewRef} duration={1000}>
                    <Image source={require('../Assests/iconimages/bottomnavigation4.png')} style={styles.bottomnavigationicon4} />
                    <Animatable.View ref={circleRef} style={styles.circle}>

                    </Animatable.View>
                </Animatable.View>
            </TouchableOpacity>
        )
    }

    const TabButton5 =(props)=>{
        const { item, onPress, accessibilityState } = props;
        const focused = accessibilityState.selected;
        const viewRef = useRef(null);
        const circleRef = useRef(null);

        useEffect(()=>{
            if(focused){
                viewRef.current.animate(animate1)
                circleRef.current.animate(circle1)
            }else {
                viewRef.current.animate(animate2)
                circleRef.current.animate(circle2)
            }
        },[focused])

        return(
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Animatable.View ref={viewRef} duration={1000}>
                    <Image source={require('../Assests/iconimages/bottomnavigation5.png')} style={styles.bottomnavigationicon5} />
                    <Animatable.View ref={circleRef} style={styles.circle}>

                    </Animatable.View>
                </Animatable.View>
            </TouchableOpacity>
        )
    }



    const BottomNavigationBar = ()=>{
    


    return(
        <>
    <Bottom.Navigator screenOptions={{
        headerShown : false,
        tabBarShowLabel : false,
        tabBarStyle : styles.tabbarstyles
    }}>
        <Bottom.Screen name="Home" component={HomePage} options={{
            tabBarIcon : ()=>(
                <Animatable.View>
                        <Image source={require('../Assests/iconimages/bottomnavigation1.png')} style={styles.bottomnavigationicon1} />
                </Animatable.View>
                
            ),
            tabBarButton : (props)=><TabButton {...props} />
        }} />
        <Bottom.Screen name="About" component={AboutPage} options={{
            tabBarIcon : ()=>(
                <Animatable.View>
                    <Image source={require('../Assests/iconimages/bottomnavigation2.png')} style={styles.bottomnavigationicon2} />
                </Animatable.View>
                
            ),
            tabBarButton : (props)=><TabButton2 {...props} />
        }} />
        <Bottom.Screen name="Detail" component={DetailPage} options={{
            tabBarIcon :()=>(
                <Animatable.View>
                    <Image source={require('../Assests/iconimages/bottomnavigation3.png')} style={styles.bottomnavigationicon3} />
                </Animatable.View>
                
            ),
            tabBarButton : (props)=><TabButton3 {...props}/>
        }}/>
        <Bottom.Screen name="Contact" component={ContactPage} options={{
            tabBarIcon : ()=>(
                <Animatable.View>
                    <Image source={require('../Assests/iconimages/bottomnavigation4.png')} style={styles.bottomnavigationicon4} />
                </Animatable.View>
                
            ),
            tabBarButton : (props)=><TabButton4  {...props}/>
        }} />
        <Bottom.Screen name="Setting" component={SettingPage} options={{
            tabBarIcon :()=>(
                <Animatable.View>
                    <Image  source={require('../Assests/iconimages/bottomnavigation5.png')} style={styles.bottomnavigationicon5} />
                </Animatable.View>
                
            ),
            tabBarButton : (props)=><TabButton5 {...props} />
        }} />
    </Bottom.Navigator>
        </>
    )
}
export default BottomNavigationBar;

const styles = StyleSheet.create({
    bottomnavigationicon1 : {
        width : 21.13,
        height : 21.02,
        marginBottom : 6,
        marginTop : 10,
        marginLeft : 8 ,
        zIndex : 3,
        opacity : 50
    },
    bottomnavigationicon2:{
        width : 20.73,
        height : 20.73,
        marginBottom : 4,
        marginTop : 10,
        marginLeft : 10,
        zIndex : 3,
        opacity : 50
    },
    bottomnavigationicon4 : {
        width : 17.27,
        height : 20.72,
        marginBottom : 4,
        marginTop : 10,
        marginLeft : 10,
        zIndex : 3,
        opacity : 50
    },
    bottomnavigationicon5 :{
        width : 23.12,
        height : 19.82,
        marginBottom : 5,
        marginTop : 10,
        marginLeft : 8,
        zIndex : 3,
        opacity : 50
    },
    bottomnavigationicon3 :{
        width : 35,
        height : 35,
        marginBottom : -5,
        marginTop : 10,
        marginLeft : 2,
        zIndex : 3,
        opacity: 50,
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
    },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
      },
      tabBar: {
        height: 70,
        position: 'absolute',
        margin: 16,
        borderRadius: 16,
      },
      btn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: " white",
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center'
      },
      circle: {
        width : 40,
        height : 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4F75FF',
        borderRadius: 25,
        position : 'relative',
        bottom : 35
      },
      text: {
        fontSize: 12,
        textAlign: 'center',
        color: 'blue',
        fontWeight: '500'
      }
})