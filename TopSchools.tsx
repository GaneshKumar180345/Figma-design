import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { topschools } from "../Assests/iconimages/Backgroundimages";
import { TouchableOpacity } from "react-native";


const TopSchools = ()=>{
    return(
        <>
        <View>
        <View style={styles.section4}>
                          <View>
                            <Text style={styles.section4title}>Top Schools</Text>
                            <AntDesign style={styles.section4icon} name="right" size={20} color= 'black' />
                            <ScrollView horizontal >{topschools.map((image)=><View style={styles.section4imagediv} key={image.id}>
                                <Image style={styles.section4image} source={image.source} />
                                <Text style={styles.section4text}>{image.text1} {image.text2} {image.text3}</Text>
                            </View>)}</ScrollView>
                          <View style={styles.section4div2}>
                        <Text style={styles.section4curriculumtext}>Which Curriculum do you prefer ?</Text>
                        <TouchableOpacity style={styles.section4americanbutton}><Text style={styles.section4american}>American</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.section4frenchbutton} ><Text style={styles.section4french} >French</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.section4indianbutton}><Text style={styles.section4indian}>Indian/Ib</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.section4ukbutton}><Text style={styles.section4uk}>Uk</Text></TouchableOpacity>
                          </View>
                          </View>
                    </View>
                        </View>
        </>
    )
}
export default TopSchools;

const styles = StyleSheet.create({
    section4 :{
        position : 'relative',
        backgroundColor : '#F5F5F5',
        height : 350
    },
    section4title:{
        color : '#000000',
        position : 'absolute',
        fontSize : 16,
        fontWeight : 'medium',
        left : 21,
        width : 94,
        height : 19
    },
    section4icon:{
        position : 'absolute',
        left : 360,
    },
    section4image:{
        width : 156,
        height : 134,
        marginLeft : 16
    },
    section4text:{
        color : "#000000",
        marginTop : 10,
        marginLeft : 10
    },
    section4imagediv:{
        marginTop : 35
    },
    section4div2:{
        width : 411,
        height : 117,
        backgroundColor : '#F4F1FD',
        marginTop : 25
    },
    section4curriculumtext:{
        color : '#333333',
        fontSize : 16,
        fontWeight : 'semibold',
        marginLeft : 22,
        marginTop : 12,

    },
    section4american:{
        color : "#FFFFFF",
        textAlign : 'center',
        textAlignVertical : 'center',
        marginTop : 7
    },
    section4americanbutton:{
        backgroundColor : "#8E7EFF",
        width : 85,
        height : 34,
        borderRadius : 13,
        position : 'absolute',
        top : 54,
        left : 22
    },
    section4french:{
        color : "#333333",
        textAlign : 'center',
        textAlignVertical : 'center',
        marginTop : 7
    },
    section4frenchbutton :{
        width : 70,
        height : 34,
        backgroundColor : '#FFFFFF',
        borderRadius : 13,
        position : 'absolute',
        top : 54,
        left : 117
    },
    section4indianbutton:{
        width : 81,
        height : 34,
        backgroundColor : '#FFFFFF',
        borderRadius : 13,
        position : 'absolute',
        top : 54,
        left : 197
    },
    section4indian:{
        color : "#333333",
        textAlign : 'center',
        textAlignVertical : 'center',
        marginTop : 7
    },
    section4ukbutton:{
        width : 46,
        height : 34,
        backgroundColor : "#FFFFFF",
        borderRadius : 13,
        position : 'absolute',
        top : 54,
        left : 288
    },
    section4uk:{
        color : "#333333",
        textAlign : 'center',
        textAlignVertical : 'center',
        marginTop : 7
    },
})