import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import avatar from '../../../assets/img/avatar.jpg'
import heart from '../../../assets/img/heart.png'

import France from '../../../assets/img/flag/France.png'

const TeacherCard = ({ title }) => {
    const [choosen, setChoosen] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.teacherInfor}>
                <Image style={styles.avatar} source={avatar} resizeMode='contain'></Image>
                <View style={styles.teacherInforDetail}>
                    <Text style={styles.teacherName}>Keegan</Text>
                    <View style={styles.country}>
                        <Image style={styles.flag} source={France} resizeMode='contain'></Image>
                        <Text>Franch</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.favouriteTeacher}>
                    <Image style={styles.favouriteIcon} source={heart} resizeMode='contain'></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    avatarArea: {
        alignItems: 'center',
        padding: 20
    },

    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    teacherInfor: {
        flexDirection: 'row',

    },
    teacherInforDetail: {
        flexDirection: 'column',
        paddingHorizontal: 20
    },
    teacherName: {
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {

        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        borderWidth: 0,

    },
    country: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    flag: {
        height: 20,
        width: 20
    },
    favouriteIcon: {
        alignSelf: 'flex-start',
        height: 20,
        width: 20
    },
    favouriteTeacher:{
    }

}

);
export default TeacherCard;