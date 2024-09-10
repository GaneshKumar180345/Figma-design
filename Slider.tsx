import React from "react";
import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BackgroundImage } from "../Constants/ImageConstant";
import { Image } from "react-native-animatable";
import { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import SliderItemData from "./SliderItemData";


const width = Dimensions.get('screen')
const Slider = ()=>{
      const scrollX = useSharedValue(0)

    

    const onScrollhandler = useAnimatedScrollHandler({
        onScroll : (e)=>{
              scrollX.value = e.contentOffset.x  
        }
    })

    return (
        <>
        <Animated.View>
            <Animated.FlatList 
            horizontal 
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={onScrollhandler}
             data={BackgroundImage}
             renderItem={({item , index })=><SliderItemData item={item} index={index} scrollX={scrollX} />}
            />
        </Animated.View>
        </>
    )
}
export default Slider;

const styles = StyleSheet.create({
    backgroundimagecontainer:{
        marginLeft : 20,
        position : 'relative'
    },
    backgroundimage1 : {
        width : 357,
        height : 452
    },
    blurimage1:{
        width : 357,
        height : 91,
        resizeMode : 'cover',
        borderRadius : 12,
        marginTop : 361
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
    backgroundimage2:{
        width : 357,
        height : 452,
        position : 'absolute'
    },
    backgroundimage3 : {
        width : 357,
        height : 452,
        position : 'absolute'
    },
    blurimage2:{
        width : 357,
        height:91,
        resizeMode : 'cover',
        borderRadius : 12,
        marginTop : 361
    },
    blurimage3 :{
        width : 357,
        height : 91,
        resizeMode : 'cover',
        borderRadius : 12,
        marginTop : 361
    },
    title:{
        fontSize : 18,
        fontWeight : 'bold',
        position : 'absolute',
        top : 375,
        left : 27
    },
    discount:{
        fontSize : 14,
        fontWeight : 'medium',
        position : 'absolute',
        top : 404,
        left : 27
    }
})