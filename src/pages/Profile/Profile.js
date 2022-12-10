import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import logo from '../../../assets/img/logo.png'
import list from '../../../assets/img/list.png'
import avatar from '../../../assets/img/avatar.jpg'

const LoginView = ({ navigation }) => {

    const [showAccountInfor, setShowAccountInfor] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} resizeMode='contain'></Image>
                <Image style={styles.listIcon} source={list} resizeMode='contain'></Image>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.avatarArea}>
                    <Image style={styles.avatar} source={avatar} resizeMode='contain'></Image>
                    <View style={styles.infor}>
                        <Text style={styles.name}>Long Long</Text>
                        <Text style={styles.id}>ID: 123-456-789adasda-45a4d8sd </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <Text style={styles.linkText}>Người khác đánh giá bạn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.account}>
                    <TouchableOpacity style={styles.accountText} onPress={()=>setShowAccountInfor(!showAccountInfor)}>
                        <Text>Tài khoản</Text>
                    </TouchableOpacity>
                    {showAccountInfor && <View style={styles.accountInfo}>
                        <View style={styles.tag}>
                            <Text style={styles.label}><Text style={{ color: 'red' }}>*</Text>Tên</Text>
                            <TextInput style={styles.input} defaultValue=" Long Long"></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}>Địa chỉ email</Text>
                            <TextInput style={styles.input} defaultValue=" Student@lettutor.com"></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}><Text style={{ color: 'red' }}>*</Text>Quốc gia</Text>
                            <TextInput style={styles.input} defaultValue=" Việt Nam"></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}><Text style={{ color: 'red' }}>*</Text>Số điện thoại</Text>
                            <TextInput style={styles.input} defaultValue=" 0358887503"></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}><Text style={{ color: 'red' }}>*</Text>Ngày sinh</Text>
                            <TextInput style={styles.input} defaultValue=" 1999-06-08"></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}><Text style={{ color: 'red' }}>*</Text>Trình độ</Text>
                            <TextInput style={styles.input} defaultValue=" PreA1"></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}><Text style={{ color: 'red' }}>*</Text>Muốn học</Text>
                            <TextInput style={styles.input} defaultValue=" Business English"></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}>Lịch học</Text>
                            <TextInput style={[styles.input, styles.timeTable]} multiline={true} placeholder=" Ghi chú thời gian mà bạn muốn học trong tuần"></TextInput>
                        </View>

                        <TouchableOpacity style={styles.confirmButton}>
                                <Text style={styles.confirmButtonText}> Lưu thay đổi </Text>
                            </TouchableOpacity>
                    </View>
                    }
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
        justifyContent: 'space-between',
        padding: 20
    },
    listIcon: {
        height: 20,
        width: 20,

    },
    logo: {
        width: '50%',
    },

    content: {
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        borderTopWidth: 2,
        borderColor: '#0071F0',
    },

    avatarArea: {
        alignItems: 'center',
        padding: 20
    },

    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    infor: {
        padding: 20
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    linkText: {
        color: '#0071F0'
    },
    account: {

    },
    accountText: {
        padding: 10,
        marginStart: 10,
        height: 50,
        backgroundColor: '#F5F6FA',
        justifyContent: 'center',
        marginHorizontal: 3,
        marginVertical: 2
    },
    accountInfo: {
        padding: 10,
        marginHorizontal: 20
    },
    tag: {
        marginVertical: 10
    },

    input: {
        borderWidth: 1,
        height: 40,
        borderRadius: 10,
        marginVertical: 5,
        borderColor: '#C5C6C9'
    },
    label: {
        fontWeight: 'bold',
        marginVertical: 5
    },
    timeTable: {
        height: 100,
        textAlignVertical: "top"
    },
    confirmButton: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        height: 50,
        width: '40%',
        backgroundColor: '#0071F0',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        borderRadius: 5,
        marginVertical: 20
    },
    confirmButtonText: {
        color: 'white',
        alignSelf: "center",
        fontSize: 15,
        fontWeight: 'bold',

    },
}



);

export default LoginView;