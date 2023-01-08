import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, Entypo, FontAwesome } from '@expo/vector-icons';
import { StateContext, StateProvider } from "../../Context/StateContext";
import { useContext, useState, useEffect } from 'react'
import Header from "../../component/Header";
import GetUserInfo from '../../Services/GetUserInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logout from '../../Services/Logout';
import avatar from '../../../assets/img/avatar.jpg'

const ICONSIZE = 30
const COLOR = '#0071F0'

const MenuList = ({ navigation }) => {
    const [accessToken, setToken] = useState()
    const [userInfo, setUser] = useState()

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
        if (accessToken !== undefined)
            GetUserInfo(accessToken, setUser)
    }, [accessToken]);

    return (
        <StateProvider>
            <View style={styles.container}>
                <Header navigation={navigation} ></Header>
                <ScrollView style={styles.menuItems}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('profile')}>
                        <View style={styles.menuIcon}>
                            <Image style={styles.avatar} alt='avatar' source={userInfo !== undefined ? {uri: userInfo.user.avatar} : avatar} resizeMode='contain'></Image>
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Duc Minh</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <MaterialIcons style={styles.iconFrame} name="library-add" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Mua buổi học</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <MaterialCommunityIcons name="key-variant" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Đổi mật khẩu</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <FontAwesome5 name="chalkboard-teacher" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Gia sư</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <Entypo name="calendar" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Lịch học</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <Entypo name="back-in-time" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Lịch sử</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <FontAwesome name="graduation-cap" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Khoá học</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <FontAwesome5 name="book-open" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Khoá học của tôi</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <FontAwesome5 name="user-graduate" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Đăng ký làm gia sư</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={() => { Logout(); navigation.navigate('login') }}>
                        <View style={styles.menuIcon}>
                            <MaterialIcons name="logout" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Đăng xuất</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View >
        </StateProvider>
    );
}
0
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        height: "100%",
        backgroundColor: 'white'
    },
    menuIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    iconFrame: {

    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    menuItem: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        padding: 10
    },
    menuItems: {
        display: "flex",
        flexDirection: "column",
        padding: 30,
        height: '100%',

    },
    menuItemTitle: {
        flex: 5,
        display: 'flex',
        justifyContent: 'center'
    },
    itemText: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 20,
        color: 'black'
    }
});

export default MenuList;