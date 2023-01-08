import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-paper';

import logo from '../../../assets/img/logo.png'
import facebookLogo from '../../../assets/img/facebookLogo.png'
import googleLogo from '../../../assets/img/googleLogo.png'
import mobileLogo from '../../../assets/img/mobileLogo.png'

import Login from "../../Services/Login";
import RefreshToken from "../../Services/RefreshToken";
import { StateContext, StateProvider } from "../../Context/StateContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FacebookLogin from "../../Services/FacebookLogin";


import { useEffect, useContext } from "react";
const LoginView = ({ navigation }) => {
    const [emailError, setemailError] = useState('');
    const [loginError, setloginError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginState, setLoginState] = useState();
    const [passwordVisible, setPasswordVisible] = useState(true);

    const [data, setData] = useContext(StateContext)

    const Boiler = async () => {
        try {
            const token = await AsyncStorage.getItem("token")
            if (token !== null) {
                if (Date.parse(JSON.parse(token).access.expires) < Date.now())
                    RefreshToken(JSON.parse(token))
                setData(token)
                navigation.navigate('home')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        Boiler();
    }, []);
    async function loginForm() {
        setemailError('')
        setPasswordError('')
        setloginError('')

        if (email === '') setemailError('Email không được để trống')
        else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(email) === false) setemailError('Email không đúng');
        }
        if (password === '') setPasswordError('Mật khẩu không được để trống')


        if (emailError === '' && passwordError === '' && email !== '' && password !== '') {
            console.log(email)
            console.log('login')
            Login(email, password, setLoginState)
        }
    }

    useEffect(() => {

        //   console.log(loginState)
        if (loginState !== undefined) {
            if (loginState.data === undefined)
                setloginError('Tài khoản hoặc mật khẩu không đúng')
            else {
                setData(loginState.data.tokens)
                navigation.navigate('home')
            }
        }
    }, [loginState]);




    return (
        <StateProvider>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={logo} resizeMode='contain'></Image>
                </View>

                <View style={styles.authentication}>
                    <View style={styles.content}>
                        <Text style={styles.loginText}> Đăng nhập </Text>
                        <View style={styles.loginArea}>
                            <Text style={styles.textIntro}> Phát triển kỹ năng tiếng Anh nhanh nhất bằng cách
                                học 1 kèm 1 trực tuyến theo mục tiêu và lộ trình dành cho riêng bạn</Text>
                            <View style={styles.formLogin}>
                                <TextInput style={styles.input} value={email} onChangeText={setEmail} name="email" label="ĐỊA CHỈ EMAIL " />
                                {emailError !== '' && <Text style={styles.error}>{emailError}</Text>}

                                <TextInput style={styles.input} value={password} onChangeText={setPassword} name="password" label="MẬT KHẨU " secureTextEntry={passwordVisible}
                                    right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />} />
                                {passwordError !== '' && <Text style={styles.error}>{passwordError}</Text>}

                                <TouchableOpacity style={styles.forgotPass} onPress={() => navigation.navigate('forgotPassword')}>
                                    <Text style={styles.forgotPassText}> Quên mật khẩu? </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.loginButton} onPress={loginForm}>
                                    <Text style={styles.loginButtonText}> ĐĂNG NHẬP </Text>
                                </TouchableOpacity>
                                {loginError !== '' && <Text style={styles.error}>{loginError}</Text>}

                            </View>

                            <View style={styles.otherLogin}>
                                <Text>Hoặc tiếp tục với</Text>
                                <View style={styles.otherLoginIcons}>
                                    <TouchableOpacity onPress={()=>FacebookLogin()}>
                                        <Image style={styles.otherLoginIcon} source={facebookLogo} resizeMode='contain' />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={styles.otherLoginIcon} source={googleLogo} resizeMode='contain' />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.phoneIcon}>
                                        <Image style={[styles.otherLoginIcon]} source={mobileLogo} resizeMode='contain' />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.registerText}>
                                    <Text >Chưa có tài khoản? </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('register')}>
                                        <Text style={styles.forgotPassText}>Đăng ký</Text>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </StateProvider>

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
    authentication: {
        padding: 20,
    },
    content: {
        height: '100%'
    },
    loginText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0071F0',
        alignSelf: 'center'
    },
    loginArea: {
        padding: 20,
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
    forgotPass: {
        marginVertical: 20
    },
    forgotPassText: {
        color: '#0071F0'
    },
    loginButton: {
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
    loginButtonText: {
        color: 'white',
        alignSelf: "center",
        fontSize: 15,
        fontWeight: 'bold',

    },

    otherLogin: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20
    },

    otherLoginIcons: {
        flexDirection: "row",
        margin: 10,
        padding: 20,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    otherLoginIcon: {
        height: 50,
    },
    phoneIcon: {
        width: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#0071F0',
        alignItems: 'center'
    },
    registerText: {
        flexDirection: 'row',
        alignSelf: 'center'
    }
}



);

export default LoginView;