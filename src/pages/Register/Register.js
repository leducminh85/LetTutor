import React, { useState, useEffect } from "react";
import { AppBar } from "@react-native-material/core";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { Header } from "react-native/Libraries/NewAppScreen";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-paper';

import logo from '../../../assets/img/logo.png'
import facebookLogo from '../../../assets/img/facebookLogo.png'
import googleLogo from '../../../assets/img/googleLogo.png'
import mobileLogo from '../../../assets/img/mobileLogo.png'

import Register from "../../Services/Register";
import VerifyAccount from "../../Services/VerifyAccount";

const RegisterView = ({ navigation }) => {
    const [emailError, setemailError] = useState('');
    const [loginError, setloginError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const [registerState, setRegisterState] = useState();
    const [passwordVisible, setPasswordVisible] = useState(true);

    // const {isLoading, userToken} = useContext(AuthContext);

    async function registerForm() {
        setemailError('')
        setPasswordError('')
        setloginError('')
        if (email === '') setemailError('Email không được để trống')
        else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(email) === false) setemailError('Email không đúng');
        }
        if (password === '') setPasswordError('Mật khẩu không được để trống')
        else
            if (password !== rePassword) setPasswordError('Xác nhận mật khẩu không đúng')

        if (emailError !== '' && passwordError !== '') {
            console.log('first')
            Register(email, password, setRegisterState)
        }
    }

    useEffect(() => {

        if (registerState !== undefined) {
            console.log(registerState.data)
            if (registerState.data.message === 'Email has already taken')
                setemailError('Email đã tồn tại')
            else
                if (registerState.data.message === '\"password\" length must be at least 6 characters long')
                    setPasswordError('Mật khẩu ít nhất 6 ký tự')
            
            if (registerState.data!== null && registerState.data.tokens !== undefined)
                {const token = registerState.data.tokens.access.token;
                    VerifyAccount(token);
                    navigation.navigate('home')
                }
        }
    }, [registerState]);

    const [passwordCheckVisible, setPasswordCheckVisible] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} resizeMode='contain'></Image>
            </View>

            <View style={styles.authentication}>
                <View style={styles.content}>
                    <Text style={styles.titleText}> Đăng ký </Text>
                    <View style={styles.registerArea}>
                        <Text style={styles.textIntro}> Phát triển kỹ năng tiếng Anh nhanh nhất bằng cách
                            học 1 kèm 1 trực tuyến theo mục tiêu và lộ trình dành cho riêng bạn</Text>
                        <View style={styles.formRegister}>
                            <TextInput style={styles.input} value={email} onChangeText={setEmail} name="email" label="ĐỊA CHỈ EMAIL " />
                            {emailError !== '' && <Text style={styles.error}>{emailError}</Text>}

                            <TextInput style={styles.input} value={password} onChangeText={setPassword} name="password" label="MẬT KHẨU " secureTextEntry={passwordVisible}
                                right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />} />
                            <TextInput style={styles.input} value={rePassword} onChangeText={setRePassword} name="passwordCheck" label="XÁC NHẬN MẬT KHẨU " secureTextEntry={passwordCheckVisible}
                                right={<TextInput.Icon name={passwordCheckVisible ? "eye" : "eye-off"} onPress={() => setPasswordCheckVisible(!passwordCheckVisible)} />} />
                            {passwordError !== '' && <Text style={styles.error}>{passwordError}</Text>}


                            <TouchableOpacity style={styles.registerButton} onPress={registerForm}>
                                <Text style={styles.registerButtonText}> ĐĂNG KÝ </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.otherLogin}>
                            <Text>Hoặc tiếp tục với</Text>
                            <View style={styles.otherLoginIcons}>
                                <TouchableOpacity>
                                    <Image style={styles.otherLoginIcon} source={facebookLogo} resizeMode='contain' />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={styles.otherLoginIcon} source={googleLogo} resizeMode='contain' />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.phoneIcon}>
                                    <Image style={[styles.otherLoginIcon]} source={mobileLogo} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.loginText}>
                                <Text>Đã có tài khoản? </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                                    <Text style={styles.linkText}>Đăng nhập</Text>
                                </TouchableOpacity>
                            </View>


                        </View>
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
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0071F0',
        alignSelf: 'center'
    },
    registerArea: {
        padding: 20,
        flexDirection: 'column',
    },


    textIntro: {
        textAlign: 'center',

    },

    formRegister: {
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
    linkText: {
        color: '#0071F0'
    },
    registerButton: {
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
    registerButtonText: {
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
    loginText: {
        flexDirection: 'row',
        alignSelf: 'center'
    }
}



);

export default RegisterView;