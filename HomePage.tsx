import React, { useState } from "react";
import { Alert, Dimensions, FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Calendar } from 'react-native-calendars';
import Slider from "./Slider";
import TopSchools from "./TopSchools";
import TopUniversity from "./TopUniversity";

const HomePage = ()=>{
    return(
        <>
        <ScrollView>         
                   {/*header */}
               <View style={styles.main}>
                <TouchableOpacity><Image style={styles.LandPimage} source={require('../Assests/iconimages/logo.png')} /></TouchableOpacity>
                <TouchableOpacity><Image style={styles.calender} source={require('../Assests/iconimages/calender.png')} /></TouchableOpacity>
                <TouchableOpacity><Image style={styles.bell} source={require('../Assests/iconimages/bell.png')}/></TouchableOpacity>
                <TouchableOpacity><Image style={styles.profilelogo} source={require('../Assests/iconimages/profilelogo.png')}/></TouchableOpacity>
                    <View style={styles.backgroundimagecontainer}>
                        <Slider/>
                    </View>
                    <TextInput style={styles.searchbar} ><Text style={styles.searchtext}>search</Text></TextInput>
                    <AntDesign style={styles.searchicon} name="search1" size={20} color='black'/>
                    <TouchableOpacity><Image source={require('../Assests/iconimages/Eqlizer.png')} style={styles.equalizer} /></TouchableOpacity>
                    <TouchableOpacity style={styles.university}><Image style={styles.universityimage} source={require('../Assests/iconimages/university.png')}/></TouchableOpacity>
                    <TouchableOpacity style={styles.school}><Image style={styles.schoolimage} source={require('../Assests/iconimages/school.png')}/></TouchableOpacity>
                    <TouchableOpacity style={styles.activity} ><Image style={styles.activityimage} source={require('../Assests/iconimages/activity.png')}/></TouchableOpacity>
                    <TouchableOpacity style={styles.tutor} ><Image style={styles.tutorimage} source={require('../Assests/iconimages/tutor.png')}/></TouchableOpacity>
                    <TouchableOpacity style={styles.theme} ><Image style={styles.themeimage} source={require('../Assests/iconimages/theme.png')}/></TouchableOpacity>
                    </View>
                    {/* schools section */}
                    <View style={styles.topschoolediv1}>
                        <TopSchools/>
                    </View>
                    {/* university section */}
                    <View>
                        <TopUniversity/>
                    </View>
                    {/*calender section */}
                    <View style={styles.calendersection}>
                        <View style={styles.calenderdiv}>
                        <Image style={styles.calenderimage} source={require('../Assests/iconimages/calender1.png')}/>
                        <Text style={styles.calendertext}>Add events to your Calender</Text>
                        <Text style={styles.calendertext2}>Add events to your Calender</Text>
                        <View style={styles.calenderdata}>
                        <Calendar/>
                            </View>
                        </View>
                    </View>
                        {/* schools secton */}
                    <View>
                        <TopUniversity/>
                    </View>
                    <View style={styles.section5seemore}>
                        <TouchableOpacity style={styles.section5seemorebutton}><Text style={styles.seemorebuttontext}>See more <AntDesign name="arrowdown" size={20} color='#5F33E1'/></Text></TouchableOpacity>
                    </View>
        </ScrollView>
        </>
    )
}
export default HomePage;

const styles = StyleSheet.create({
    main :{
        position : 'relative',
        backgroundColor : "#F5F5F5",
        height : 720,
        bottom : 40
    },
    backgroundimagecontainer:{
        marginTop : 20
    },
    topschoolediv1:{
        position : 'relative',
        backgroundColor : '#F5F5F5',
        height : 360,
    },
    LandPimage : {
        width :87,
        height : 31.24,
        marginLeft : 18,
        marginTop : 66
    },
    calender :{
        width : 24.1,
        height : 24,
        position : 'absolute',
        top :  -20,
        left : 275
    },
    bell :{
        width:20.84,
        height : 24,
        position : 'absolute',
        top : -20,
        left : 320
    },
    profilelogo:{
        width : 33,
        height : 33,
        position: "absolute",
        top : - 25,
        left : 355
    },
    searchtext:{
        color : '#A59EB6',
    },
    searchbar :{
        width : 304,
        height : 45,
        backgroundColor : '#F4F2F9',
        marginLeft : 23,
        position : 'absolute',
        top : 590,
        borderRadius : 15,
        
    },
    searchicon:{
        position : 'absolute',
        top : 602,
        left : 300
    },
    equalizer :{
        width : 40,
        height : 40,
        position : 'absolute',
        top : 22,
        left : 350
    },
    universityimage:{
        width : 49,
        height : 74,
        marginTop : 10
    },
    university :{
        position : 'absolute',
        top : 645,
        left : 23
    },
    schoolimage : {
        width : 48.06,
        height : 74,
        marginTop : 10
    },
    school :{
        position : 'absolute',
        top : 645,
        left : 96
    },
    activityimage:{
        width : 48.06,
        height : 74,
        marginTop : 10
    },
    activity :{
        position : 'absolute',
        top : 645,
        left : 167.06
    },
    tutorimage:{
        width : 48.06,
        height : 74,
        marginTop : 10
    },
    tutor :{
        position : 'absolute',
        top : 645,
        left : 241
    },
    themeimage :{
        width : 56,
        height : 74,
        marginTop : 10
    },
    theme:{
        position : 'absolute',
        top : 645,
        left : 309.18
    },
    calendersection:{
        position : 'relative',
        backgroundColor : '#F5F5F5',
        height : 400,
    },
    calenderdiv:{
        width : 353,
        height : 68,
        backgroundColor : "#E9EFEC",
        borderRadius : 9,
        position : 'absolute',
        bottom : 360,
        left : 30
    },
    calenderimage:{
        width : 41,
        height : 42,
        position : 'absolute',
        top : 13,
        left : 20
    },
    calendertext :{
        color : '#333333',
        position : 'absolute',
        left : 80,
        top : 11,
        fontSize : 16,
        fontWeight : 'bold'
    },
    calendertext2:{
        position : 'absolute',
        color : "#333333",
        fontSize : 12,
        fontWeight : 'medium',
        top  : 30,
        left : 79
    },
    calenderdata:{
        position : 'absolute',
        width : 369,
        height : 367,
        top : 90,
        right : 1,
        borderRadius : 10
    },
    seemorebuttontext:{
        color : "#5F33E1",
    },
    section5seemore:{
        position : 'relative',
        height : 60,
        backgroundColor : '#F5F5F5'
    },
    section5seemorebutton:{
        width : 147,
        height : 43,
        backgroundColor : '#F4F1FD',
        borderRadius : 46,
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute',
        left : 120
    }
  });