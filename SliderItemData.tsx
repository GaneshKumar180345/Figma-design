import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { Extrapolation } from 'react-native-reanimated';
import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { BackgroundImage } from "../Constants/ImageConstant";
import { Image } from "react-native-animatable";
import { BlurView } from "@react-native-community/blur";


const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

const SliderItemData = ({item , index , scrollX})=>{

    const anAnimatedStyle = useAnimatedStyle(()=>{
        return {
            transform : [
                {
                    translateX : interpolate(
                        scrollX.value,
                        [(index - 1) * width , index * width  , (index + 1) * width],
                        [-width * 0.04 , 0 , width * 0.04],
                        Extrapolation.CLAMP
                    )
                },
                {
                    scale : interpolate(
                        scrollX.value,
                        [(index - 1) * width  , index * width , (index + 1) * width ],
                        [0.9 , 1 , 0.9],
                        Extrapolation.CLAMP
                    )
                }
            ]
        }
    })

    return(
        <>
            <Animated.View style={[styles.backgroundimagecontainer , anAnimatedStyle]}>
               <Image source={item.image} style={styles.backgroundimage}/>
               <View style={styles.blurcontainer}>
                <BlurView style={styles.absolute}blurType="light" blurAmount={10} reducedTransparencyFallbackColor="white"/>
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.discount}>{item.discount}</Text>
                <TouchableOpacity style={styles.viewbutton}><Text style={styles.viewtext}>View</Text></TouchableOpacity>
            </Animated.View>  
        </>
    )
}
export default SliderItemData;

const styles = StyleSheet.create({
    backgroundimagecontainer :{
        marginLeft : 10
    },
    backgroundimage:{
        width : 357,
        height : 452,
        
    },
    absolute :{
        flex : 1
    },
    title:{
        fontSize : 18,
        color : "#F5F7F8",
        fontWeight : 'bold',
        position : 'absolute',
        top : 380,
        left : 22
    },
    discount:{
        fontSize : 14,
        fontWeight : 'medium',
        color : '#F5F7F8',
        position : 'absolute',
        top : 410,
        left : 22
    },
    viewbutton:{
        width : 52,
        height : 27,
        backgroundColor : "#FFFFFF",
        borderRadius : 10,
        position : 'absolute',
        top : 390,
        left : 275
    },
    viewtext:{
        color : 'black',
        textAlign : 'center',
        marginTop : 4
    },
    blurcontainer:{
        position : 'absolute',
        top : 350,
        bottom : 0,
        left : 0,
        right : 0,
        borderWidth : 0.4,
        borderRadius : 10,
        overflow : 'hidden'
    }
})