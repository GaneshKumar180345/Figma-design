import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Image, ScrollView, Text, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import {UniversityData} from '../Assests/iconimages/Backgroundimages';


const TopUniversity = ()=>{
    return(
        <>
        <View style={styles.section3}>
                        <Text style={styles.topuniversitytitle}>Top Universities</Text>
                        <AntDesign style={styles.topuniversityicon} name="right" size={20} color='black' />
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >{UniversityData.map((image)=><View key={image.id} >
                            <Image style={styles.topuniversityimage} source={image.source} />
                            <Text style = {styles.universitytext}>{image.text1} {image.text2} {image.text3}</Text>
                        </View>)}</ScrollView>

                        <View style={styles.section3color}>
                            <Text style={styles.topuniversitytext1}>What Program are you looking for ?</Text>
                            <TouchableOpacity style={styles.healthandmedicine}>< Text style={styles.health}>Health and medicine</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.informationtechnology} ><Text style={styles.information} >Information technology</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.law} ><Text style={styles.lawuniversity}>Law</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.mediaanddesign}><Text style={styles.media}>Media and design</Text></TouchableOpacity>
                        </View>
                        </View>
        </>
    )
}
export default TopUniversity;

const styles = StyleSheet.create({
    section3:{
        position : 'relative',
        backgroundColor : '#F5F5F5',
        height : 400
    },
    topuniversitytitle :{
        color : "#000000",
        fontSize : 16,
        fontWeight : 'medium',
        left :21,
    },
    topuniversityicon :{
        position : 'absolute',
        left : 370
    },
    topuniversityimage :{
        width : 157,
        height :134,
        marginHorizontal : 10,
        marginTop : 10
    },
    universitytext:{
        color : "#000000",
        marginTop : 10,
        marginLeft : 14,
        fontSize : 12,
    },
    section3color :{
        width : 411,
        height : 150,
        backgroundColor : "#F4F1FD",
        marginBottom : 40
    },
    topuniversitytext1:{
        width : 261,
        height : 22,
        marginLeft : 22,
        color : '#333333',
        marginTop : 10
    },
    healthandmedicine:{
        width : 147,
        height : 34,
        backgroundColor : "#8E7EFF",
        borderRadius : 13,
        marginTop : 22,
        marginLeft : 22
    },
    health:{
        textAlign : 'center',
        textAlignVertical : 'center',
        justifyContent : 'center',
        marginTop : 7
    },
    information:{
        color : "#333333",
        textAlign : 'center',
        textAlignVertical : 'center',
        marginTop : 7
    },
    informationtechnology:{
        width : 165,
        height : 34,
        backgroundColor : "#FFFFFF",
        borderRadius : 13,
        position : 'absolute',
        top : 54,
        left : 179
    },
    lawuniversity:{
        color : "#333333",
        textAlign : 'center',
        textAlignVertical : 'center',
        marginTop : 7
    },
    law :{
        width : 53,
        height : 34,
        backgroundColor : '#FFFFFF',
        borderRadius : 13,
        position : 'absolute',
        top : 100,
        left : 23
    },
    media:{
        color : "#333333",
        textAlign : 'center',
        textAlignVertical : 'center',
        marginTop : 7
    },
    mediaanddesign :{
        width : 130,
        height : 34,
        backgroundColor : "#FFFFFF",
        borderRadius : 13,
        position : 'absolute',
        top : 100,
        left : 86
    },
})