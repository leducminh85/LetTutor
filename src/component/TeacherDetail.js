import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, TextInput,TouchableWithoutFeedback } from 'react-native';
import { Audio, Video } from 'expo-av';

import Vote from './element/Vote'
import FilterTag from "./element/FilterTag";

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
            <TouchableOpacity  style={styles.header} onPress={()=> navigation.navigate('home')}>
                <Image style={styles.logo} source={logo} resizeMode='contain'></Image>
                <Image style={styles.listIcon} source={list} resizeMode='contain'></Image>
            </TouchableOpacity >


            <ScrollView>
                <View style={styles.content}>
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
                    <View style={styles.videoFrame}>
                        <Video
                            source={video}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            style={styles.videoStyle}
                        />
                    </View>
                    <View style={styles.skillTags}>
                        <Text style={styles.title}>Ngôn ngữ</Text>
                        <View style={styles.tags}>
                            <FilterTag title='Tiếng anh' state={true} handleTouch={true} />
                        </View>
                    </View>

                    <View style={styles.skillTags}>
                        <Text style={styles.title}>Chuyên ngành</Text>
                        <View style={styles.tags}>
                            <FilterTag title='Tiếng anh cho công việc' state={true} handleTouch={true} />
                            <FilterTag title='Giao tiếp' state={true} handleTouch={true} />
                            <FilterTag title='Tiếng anh cho trẻ' state={true} handleTouch={true} />
                            <FilterTag title='IELTS' state={true} handleTouch={true} />
                            <FilterTag title='TOEIC' state={true} handleTouch={true} />
                            <FilterTag title='KET' state={true} handleTouch={true} />
                            <FilterTag title='PET' state={true} handleTouch={true} />
                            <FilterTag title='STARTER' state={true} handleTouch={true} />
                            <FilterTag title='IELTS' state={true} handleTouch={true} />
                            <FilterTag title='TOEIC' state={true} handleTouch={true} />
                        </View>
                    </View>

                    <View style={styles.skill}>
                        <Text style={styles.title}>Sở thích</Text>
                        <Text style={styles.text}>I am a fun, talkative person who loves to find out about others cultures and experience.</Text>
                    </View>

                    <View style={styles.skill}>
                        <Text style={styles.title}>Kinh nghiệm giảng dạy</Text>
                        <Text style={styles.text}>Acadsoc - English Language Instruction Chinese based online English teaching platform. I taught EILTS as well as a wide age range of Children and adults of all levels. Sincewin - English Language Instruction Online English lessons for whole kindergarten classes. I taught basic phonics and vocabulary using songs, TPR and puppets</Text>
                    </View>
                </View>
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
        flex: 1,
        margin: 0,
        height: 200,
        width: '100%',
    },
    videoFrame: {
        flex: 1,
        marginVertical: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',

        marginVertical: 10,
        marginRight: 10,
    },
    skill:{
        marginVertical: 10,
    },
    touchOnLogo:{
        flex:1,
    }
}



);

export default LoginView;