import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

import logo from '../../../assets/img/logo.png'
import facebookLogo from '../../../assets/img/facebookLogo.png'
import googleLogo from '../../../assets/img/googleLogo.png'
import mobileLogo from '../../../assets/img/mobileLogo.png'

const LoginView = ({ navigation }) => {

    const [passwordVisible, setPasswordVisible] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} resizeMode='contain'></Image>
            </View>

            <View style={styles.authentication}>
                <Text style={styles.forgotPasswordText}> Đặt lại mật khẩu </Text>
                <View style={styles.forgotPasswordArea}>
                    <Text style={styles.textIntro}> Vui lòng nhập email để tìm kiếm tài khoản của bạn.</Text>
                    <View style={styles.formLogin}>
                        <TextInput style={styles.input} name="email" label="ĐỊA CHỈ EMAIL " />
                        <TouchableOpacity style={styles.confirmButton}>
                            <Text style={styles.confirmButtonText}> Xác nhận </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: 'white'
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
        backgroundColor: 'black'
    },
    logo: {
        width: '50%',
    },
   
    authentication: {
        padding: 20,
        height: '80%',
        justifyContent: 'center'
    },
    forgotPasswordText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0071F0',
        alignSelf: 'center'
    },
    forgotPasswordArea: {
        padding: 10,
        flexDirection: 'column',
    },


    textIntro: {
        textAlign: 'center',

    },

    formLogin: {
        flexDirection: 'column',
        paddingVertical: 20,
    },

    input: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        marginVertical: 10,
    },

    confirmButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#0071F0',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        borderRadius: 5
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
