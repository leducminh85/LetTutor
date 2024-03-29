import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import avatar from '../../assets/img/avatar.jpg'
import heart from '../../assets/img/heart.png'
import calendar from '../../assets/img/calendar.png'

import France from '../../assets/img/flag/France.png'

import Vote from './Vote'
import FilterTag from './FilterTag'

const TeacherCard = ({ navigation, teacher, teacherId, handlePress, favourite }) => {
    const [favoriteState, setFavoriteState] = useState(favourite);

    const specialties = teacher.specialties.split(',')
    var listSkill = [];
    for (const skill in specialties) {
        listSkill.push(
            <FilterTag key={skill} title={specialties[skill]} state={true} handleTouch={true} />
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.teacherInfor}>
                <View style={styles.teacherInfor}>
                    <Image style={styles.avatar} source={teacher.avatar !== '' ? {uri: teacher.avatar}: avatar} alt={'avatar'} resizeMode='contain'></Image>
                    <View style={styles.teacherInforDetail}>
                        <TouchableOpacity onPress={async () => {
                            navigation.navigate('teacherDetail', {teacher: teacher})}
                            }>
                            <Text style={styles.teacherName}>{teacher.name}</Text>
                        </TouchableOpacity>
                        <View style={styles.country}>
                            <Image style={styles.flag} source={France} resizeMode='contain'></Image>
                            <Text>{teacher.country}</Text>
                        </View>
                        <Vote num={teacher.rating} />
                    </View>
                </View>
                <TouchableOpacity style={styles.favouriteTeacher} onPress={() => setFavoriteState(!favoriteState)}>
                   { favoriteState ? 
                    <AntDesign name="heart" size={24} color="red" /> :
                    <AntDesign name="hearto" size={24} color="black" /> 

                   }
                </TouchableOpacity>
            </View>
            <View style={styles.skills}>
                {listSkill}
            </View>
            <Text style={styles.text}>{teacher.bio}
            </Text>
            <TouchableOpacity style={styles.bookTeacher}>
                <Image source={calendar} resizeMode='contain' style={styles.calendarIcon}></Image>
                <Text style={styles.bookTeacherText}>Đặt lịch</Text>
            </TouchableOpacity>
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
        justifyContent: 'space-between',
    },
    teacherInforDetail: {
        flexDirection: 'column',
        paddingHorizontal: 20,
    },
    teacherName: {
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        marginVertical: 10,
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
        marginVertical: 10
    },
    flag: {
        height: 20,
        width: 20,
        marginEnd: 10
    },
    favouriteIcon: {
        height: 20,
        width: 20
    },
    favouriteTeacher: {
    },
    skills: {
        flexDirection: "row",
        flexWrap: 'wrap',
        marginVertical: 10,
        marginRight: 10
    },
    text: {
        color: '#AAABAD'
    },
    bookTeacher: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0071F0',
        borderRadius: 20,
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: 20,
        marginVertical: 10,

    },

    calendarIcon: {
        height: 20,
        width: 20
    },
    bookTeacherText: {
        color: '#0071F0',
        alignSelf: "center",
        padding: 10
    }

}

);
export default TeacherCard;