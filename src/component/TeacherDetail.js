import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
// import Video from 'react-native-video';

import Vote from './element/Vote'

import list from '../../assets/img/list.png'
import logo from '../../assets/img/logo.png'
import avatar from '../../assets/img/avatar.jpg'
import heart from '../../assets/img/heart.png'
import France from '../../assets/img/flag/France.png'
import warning from '../../assets/img/warning.png'
import starUnactive from '../../assets/img/starUnactive.png'

import video from '../../assets/video/video.mp4'

const LoginView = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} resizeMode='contain'></Image>
                <Image style={styles.listIcon} source={list} resizeMode='contain'></Image>
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.teacherInfor}>
                    <View style={styles.teacherInfor}>
                        <Image style={styles.avatar} source={avatar} resizeMode='contain'></Image>
                        <View style={styles.teacherInforDetail}>
                            <TouchableOpacity onPress={() => navigation.navigate('teacherDetail')}>
                                <Text style={styles.teacherName}>Keegan</Text>
                            </TouchableOpacity>
                            <View style={styles.country}>
                                <Image style={styles.flag} source={France} resizeMode='contain'></Image>
                                <Text>Franch</Text>
                            </View>
                            <View style={styles.rateTeacher}>
                                <Vote />
                                <Text style={styles.numRate}>(10)</Text>
                            </View>
                        </View>
                    </View>

                </View>

                <Text style={styles.text}>I am passionate about running and fitness,
                    I often compete in trail/mountain running events and I love pushing myself.
                    I am training to one day take part in ultra-endurance events.
                    I also enjoy watching rugby on the weekends, reading and watching podcasts on Youtube.
                    My most memorable life experience would be living in and traveling around Southeast Asia.
                </Text>

                <View style={styles.functionButton}>
                    <TouchableOpacity style={styles.functionGroup}>
                        <Image style={styles.favouriteIcon} source={heart} resizeMode='contain'></Image>
                        <Text style={styles.functionText}>Yêu thích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionGroup}>
                        <Image style={styles.favouriteIcon} source={warning} resizeMode='contain'></Image>
                        <Text style={styles.functionText}>Báo cáo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionGroup}>
                        <Image style={styles.favouriteIcon} source={starUnactive} resizeMode='contain'></Image>
                        <Text style={styles.functionText}>Đánh giá</Text>
                    </TouchableOpacity>
                </View>

                {/* <Video
                    source={require('../../assets/video/video.mp4')}
                    style={styles.videoStyle}
                /> */}
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
    header: {
        height: 80,
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'space-between'
    },
    logo: {
        width: '50%',
    },


    listIcon: {
        height: 20,
        width: 20,
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    teacherInfor: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    teacherInforDetail: {
        flexDirection: 'column',
        paddingHorizontal: 20,
    },
    teacherName: {
        fontWeight: 'bold',
        fontSize: 20
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
        width: 20,
    },

    content: {
        padding: 30
    },
    rateTeacher: {
        flexDirection: 'row'
    },
    numRate: {
        fontWeight: '100',
        marginHorizontal: 10
    },
    text: {
        color: '#AAABAD'
    },
    functionGroup: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10
    },
    functionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    functionText: {
        marginVertical: 10,
        color: '#0071F0'
    },
    videoStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
}



);

export default LoginView;