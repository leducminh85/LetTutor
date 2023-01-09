import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Audio, Video } from 'expo-av';

import Vote from '../../component/Vote'
import FilterTag from "../../component/FilterTag";
import Header from "../../component/Header";

import list from '../../../assets/img/list.png'
import logo from '../../../assets/img/logo.png'
import avatar from '../../../assets/img/avatar.jpg'
import heart from '../../../assets/img/heart.png'
import France from '../../../assets/img/flag/France.png'
import warning from '../../../assets/img/warning.png'
import starUnactive from '../../../assets/img/starUnactive.png'

import video from '../../../assets/video/video.mp4'
import { useEffect, useContext } from "react";
import { StateContext } from "../../Context/StateContext";
import GetTutorInfo from "../../Services/GetTutorInfo";
import { AntDesign } from '@expo/vector-icons';

const TeacherDetail = ({ route, navigation }) => {
    const [data, setData] = useContext(StateContext)
    const { teacher } = route.params;
    const [listLanguage, setListLanguage] = useState([]);
    const [listSkill, setListSkill] = useState([]);

    useEffect(() => {
        const languages = teacher.languages.split(',')
        var list = []
        for (const skill in languages) {
            list.push(
                <FilterTag key={skill} title={languages[skill]} state={true} handleTouch={true} />
            )
        }
        setListLanguage(list)
        
        var list2 = []

        const specialties = teacher.specialties.split(',')
        for (const skill in specialties) {
            list2.push(
                <FilterTag key={skill} title={specialties[skill]} state={true} handleTouch={true} />
            )
        }
        setListSkill(list2)
    }, []);



    return (
        <View style={styles.container}>
            <Header navigation={navigation} page="Teacher Detail" />
            {teacher !== undefined &&
                <ScrollView>
                    <View style={styles.content}>
                        <View style={styles.teacherInfor}>
                            <View style={styles.teacherInfor}>
                                <Image style={styles.avatar} source={{ uri: teacher.avatar }} resizeMode='contain'></Image>
                                <View style={styles.teacherInforDetail}>
                                    <TouchableOpacity >
                                        <Text style={styles.teacherName}>{teacher.name}</Text>
                                    </TouchableOpacity>
                                    <View style={styles.country}>
                                        <Image style={styles.flag} source={France} resizeMode='contain'></Image>
                                        <Text>{teacher.country}</Text>
                                    </View>
                                    <View style={styles.rateTeacher}>
                                        <Vote num={teacher.rating} />
                                        <Text style={styles.numRate}>({teacher.feedbacks.length})</Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                        <Text style={styles.text}>{teacher.bio}</Text>

                        <View style={styles.functionButton}>
                            <TouchableOpacity style={styles.functionGroup}>
                                {teacher.favourite ?
                                    <AntDesign name="heart" size={24} color="red" /> :
                                    <AntDesign name="hearto" size={24} color="black" />
                                }
                                <Text style={styles.functionText}>Yêu thích</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.functionGroup}>
                                <Image style={styles.favouriteIcon} source={warning} resizeMode='contain'></Image>
                                <Text style={styles.functionText}>Báo cáo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.functionGroup}>
                                <Image style={styles.favouriteIcon} source={starUnactive} resizeMode='contain'></Image>
                                <Text style={styles.functionText}>Xem đánh giá</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.videoFrame}>
                            <Video
                                source={{ uri: teacher.video }}
                                useNativeControls
                                resizeMode="contain"
                                isLooping
                                style={styles.videoStyle}
                            />
                        </View>
                        <View style={styles.skillTags}>
                            <Text style={styles.title}>Ngôn ngữ</Text>
                            <View style={styles.tags}>
                                {listLanguage}
                            </View>
                        </View>

                        <View style={styles.skillTags}>
                            <Text style={styles.title}>Chuyên ngành</Text>
                            <View style={styles.tags}>
                                {listSkill}
                            </View>
                        </View>

                        <View style={styles.skill}>
                            <Text style={styles.title}>Sở thích</Text>
                            <Text style={styles.text}>{teacher.interests}</Text>
                        </View>

                        <View style={styles.skill}>
                            <Text style={styles.title}>Kinh nghiệm giảng dạy</Text>
                            <Text style={styles.text}>{teacher.experience}</Text>
                        </View>
                    </View>
                </ScrollView>
            }

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
    skill: {
        marginVertical: 10,
    },
    touchOnLogo: {
        flex: 1,
    }
}



);

export default TeacherDetail;