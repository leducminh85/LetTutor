import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import ForgotPassword from "../../Services/ForgotPassword";
import { useEffect } from "react";
import logo from '../../../assets/img/logo.png'
const ForgotPasswordView = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [emailError, setemailError] = useState('');
    const [forgotPassState, setForgotPassState] = useState();
    const [successState, setSuccessState] = useState(false);

    function forgotPasswordForm() {
        setForgotPassState(undefined)
        if (email === '') setemailError('Email không được để trống')
        else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(email) === false) setemailError('Email không đúng');
        }

        if (emailError === '')
            ForgotPassword(email, setForgotPassState)
    }

    useEffect(() => {

        //   console.log(loginState)
        if (forgotPassState !== undefined) {
       //     console.log(forgotPassState)
            if (forgotPassState.data.message === 'Email doesn\'t exist!')
                setemailError('Email chưa được đăng ký')
            else
                if (forgotPassState.data.message === '\"email\" must be a valid email')
                    setemailError('Email không có giá trị')
            if (forgotPassState.data.message === 'Email send success!')
                setSuccessState(true)
        }
    }, [forgotPassState]);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} onPress={()=>navigation.navigate('login')} resizeMode='contain'></Image>
            </View>

            <View style={styles.authentication}>
                <Text style={styles.forgotPasswordText}> Đặt lại mật khẩu </Text>
                {!successState ? <View style={styles.forgotPasswordArea}>
                    <Text style={styles.textIntro}> Vui lòng nhập email để tìm kiếm tài khoản của bạn.</Text>
                    <View style={styles.formLogin}>
                        <TextInput style={styles.input} value={email} onChangeText={setEmail} name="email" label="ĐỊA CHỈ EMAIL " />
                        {emailError !== '' && <Text style={styles.error}>{emailError}</Text>}

                        <TouchableOpacity style={styles.confirmButton} onPress={forgotPasswordForm}>
                            <Text style={styles.confirmButtonText}> Xác nhận </Text>
                        </TouchableOpacity>
                    </View>
                </View> :
                    <View style={styles.forgotPasswordArea}>
                        <Text style={styles.textIntro}> Kiểm tra email của bạn để thực hiện thay đổi mật khẩu</Text>
                    </View>
                }
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
    error: {
        color: "red",
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
        backgroundColor: 'white'
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
        borderRadius: 5,
        marginTop: 10
    },
    confirmButtonText: {
        color: 'white',
        alignSelf: "center",
        fontSize: 15,
        fontWeight: 'bold',
    },
}
);

export default ForgotPasswordView;
