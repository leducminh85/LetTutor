import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import Header from "../../component/Header";
import logo from '../../../assets/img/logo.png'
import list from '../../../assets/img/list.png'
import avatar from '../../../assets/img/avatar.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import User from "../../models/User"
import UserEdit from "../../models/UserEdit"

import GetUserInfo from "../../Services/GetUserInfo";
import UpdateUserInfo from "../../Services/UpdateUserInfo";

const Profile = ({ navigation }) => {
    const [accessToken, setToken] = useState()
    const [userInfo, setUserInfo] = useState()
    //  const [user, setUser] = useState()
    var user;
    const Boiler = async () => {
        try {
            const token = await AsyncStorage.getItem("token")
            if (token !== undefined) {
                setToken(JSON.parse(token).access.token)
                //console.log(JSON.parse(token).access.token)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        Boiler();
    }, []);

    useEffect(() => {
        if (accessToken != undefined)
            GetUserInfo(accessToken, setUserInfo);
    }, [accessToken]);
    useEffect(() => {
        if (userInfo !== undefined) {
            var userTemp = new User(userInfo.id, userInfo.name, userInfo.avatar, userInfo.country,
                userInfo.phone, userInfo.birthday, userInfo.level, userInfo.learnTopic)
            // setUser(userTemp)
            user = userTemp
        }
    }, [userInfo]);
    const [showAccountInfor, setShowAccountInfor] = useState(true);
    async function editProfileSubmit() {
        var userTemp = new UserEdit(user.name, user.avatar, user.country, user.phone, user.email, user.birthday, user.level)
        UpdateUserInfo(accessToken, userTemp)
    }
    return (
        <View style={styles.container}>
            <Header navigation={navigation}></Header>

            <ScrollView style={styles.content}>
                <View style={styles.avatarArea}>
                    <Image style={styles.avatar} source={userInfo !== undefined ? { uri: userInfo.avatar } : undefined} resizeMode='contain'></Image>
                    <View style={styles.infor}>
                        <Text style={styles.name}>{userInfo !== undefined ? userInfo.name : ''}</Text>
                        <Text style={styles.id}>ID: {userInfo !== undefined ? userInfo.id : ''} </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <Text style={styles.linkText}>Người khác đánh giá bạn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.account}>
                    <TouchableOpacity style={styles.accountText} onPress={() => setShowAccountInfor(!showAccountInfor)}>
                        <Text>Tài khoản</Text>
                    </TouchableOpacity>
                    {showAccountInfor && <View style={styles.accountInfo}>
                        <View style={styles.tag}>
                            <Text style={styles.label}><Text style={{ color: 'red' }}>*</Text>Tên</Text>
                            <TextInput style={styles.input} defaultValue={userInfo !== undefined ? userInfo.name : ''}
                                onChangeText={(name) => user.setName(name)}
                            ></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}>Địa chỉ email</Text>
                            <TextInput style={styles.input} defaultValue={userInfo !== undefined ? userInfo.email : ''}
                                onChangeText={(value) => user.setEmail(value)}
                            ></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}><Text style={{ color: 'red' }}>*</Text>Quốc gia</Text>
                            <TextInput style={styles.input} defaultValue={userInfo !== undefined ? userInfo.country : ''}
                                onChangeText={(value) => user.setCountry(value)}
                            ></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}><Text style={{ color: 'red' }}>*</Text>Số điện thoại</Text>
                            <TextInput style={styles.input} defaultValue={userInfo !== undefined ? userInfo.phone : ''}
                                onChangeText={(value) => user.setPhone(value)}

                            ></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}><Text style={{ color: 'red' }}>*</Text>Ngày sinh</Text>
                            <TextInput style={styles.input} defaultValue={userInfo !== undefined ? userInfo.birthday : ''}
                                onChangeText={(value) => user.setBirthday(value)}
                            ></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}><Text style={{ color: 'red' }}>*</Text>Trình độ</Text>
                            <TextInput style={styles.input} defaultValue={userInfo !== undefined ? userInfo.level : ''}
                                onChangeText={(value) => user.setLevel(value)}
                            ></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}><Text style={{ color: 'red' }}>*</Text>Muốn học</Text>
                            <TextInput style={styles.input}></TextInput>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.label}>Lịch học</Text>
                            <TextInput style={[styles.input, styles.timeTable]} multiline={true} placeholder=" Ghi chú thời gian mà bạn muốn học trong tuần"></TextInput>
                        </View>

                        <TouchableOpacity style={styles.confirmButton} onPress={editProfileSubmit}>
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
        borderColor: '#C5C6C9',
        paddingLeft: 10
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

export default Profile;