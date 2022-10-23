import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import FilterTag from "./element/FilterTag";
import TeacherCard from "./element/TeacherCard";

import logo from '../../assets/img/logo.png'

const LoginView = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} resizeMode='contain'></Image>
            </View>
            <ScrollView>
                <View style={styles.notification}>
                    <View style={styles.notiTitle}>
                        <Text style={styles.notiText}> Buổi học đang diễn ra</Text>
                    </View>
                    <View style={styles.timeArea}>
                        <View style={styles.classTime}>
                            <Text style={styles.timeText}>CN, 23 thg 10 22 11:00 - 11:25</Text>
                            <Text style={styles.timeLeft}> (giờ học 00:20:14)</Text>
                        </View>
                        <TouchableOpacity style={styles.gotoClassButton}>
                            <Text style={styles.gotoClassButtonText}> Vào lớp học </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.timeText}>Tổng số giờ bạn đã học là: 159 giờ 10 phút</Text>
                </View>

                <View style={styles.content}>
                    <View>
                        <View style={styles.filterTitle}>
                            <Text style={styles.filterTitleText}>Tìm kiếm gia sư</Text>
                        </View>
                        <View style={styles.searchName}>
                            <TextInput style={styles.input} placeholder="Nhập tên gia sư ..."></TextInput>
                            <TextInput style={styles.input} placeholder="Chọn quốc tịch gia sư"></TextInput>
                        </View>
                        <View style={styles.filterTime}>
                            <Text style={styles.filterTimeTitleText}>Chọn thời gian có lịch dạy trống:</Text>
                            <View style={styles.searchName}>
                                <TextInput style={styles.input} placeholder="Chọn một ngày"></TextInput>
                                <TextInput style={styles.input} placeholder="Giờ bắt đầu -> Giờ kết thúc"></TextInput>
                            </View>
                            <View style={styles.fastFilter}>
                                <FilterTag title='Tất cả' />
                                <FilterTag title='Tiếng Anh cho trẻ em' />
                                <FilterTag title='Tiếng Anh cho công việc' />
                                <FilterTag title='Giao tiếp' />
                                <FilterTag title='STARTERS' />
                                <FilterTag title='MOVERS' />
                                <FilterTag title='FLYERS' />
                                <FilterTag title='KET' />
                                <FilterTag title='PET' />
                                <FilterTag title='IELTS' />
                                <FilterTag title='TOEFL' />
                                <FilterTag title='TOEIC' />
                            </View>
                            <TouchableOpacity style={styles.resetFilter}>
                                <Text style={styles.gotoClassButtonText}> Đặt lại bộ tìm kiếm </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <View style={styles.filterTitle}>
                            <Text style={styles.filterTitleText}>Gia sư được đề xuất</Text>
                        </View>
                        <View>
                            <TeacherCard></TeacherCard>
                        </View>

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
    },
    logo: {
        width: '50%',
    },
    notification: {
        backgroundColor: '#0071F0',
        padding: 30,
        alignItems: 'center',

    },
    notiTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    notiText: {
        color: 'white',
        fontSize: 20,
    },
    timeText: {
        color: 'white'
    },
    timeArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeLeft: {
        color: 'yellow',
    },
    classTime: {
        alignItems: 'center'
    },
    gotoClassButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        borderRadius: 20,
        margin: 20,

    },
    gotoClassButtonText: {
        color: '#0071F0',
        alignSelf: "center",
        padding: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 5,
        borderColor: '#C5C6C9',
        padding: 5,
        marginEnd: 10
    },
    content: {
        padding: 30,
        paddingTop: 10,
    },
    searchName: {
        flexDirection: 'row'
    },
    filterTitle: {
        marginVertical: 10
    },
    filterTitleText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    filterTime: {

    },
    filterTimeTitleText: {
        fontWeight: 'bold'
    },
    fastFilter: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    resetFilter: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0071F0',
        borderRadius: 20,
        width: '50%',
        marginVertical: 10
    },

}



);

export default LoginView;