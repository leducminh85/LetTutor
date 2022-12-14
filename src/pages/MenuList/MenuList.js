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
                            <Image style={styles.avatar} alt='avatar' source={userInfo !== undefined ? {uri: userInfo.avatar} : avatar} resizeMode='contain'></Image>
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>{userInfo !== undefined ? userInfo.name : 'UnNamed'}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <MaterialIcons style={styles.iconFrame} name="library-add" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Mua bu???i h???c</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <MaterialCommunityIcons name="key-variant" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>?????i m???t kh???u</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <FontAwesome5 name="chalkboard-teacher" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Gia s??</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <Entypo name="calendar" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>L???ch h???c</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <Entypo name="back-in-time" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>L???ch s???</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <FontAwesome name="graduation-cap" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Kho?? h???c</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <FontAwesome5 name="book-open" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>Kho?? h???c c???a t??i</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <FontAwesome5 name="user-graduate" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>????ng k?? l??m gia s??</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={() => { Logout(); navigation.navigate('login') }}>
                        <View style={styles.menuIcon}>
                            <MaterialIcons name="logout" size={ICONSIZE} color={COLOR} />
                        </View>
                        <View style={styles.menuItemTitle}>
                            <Text style={styles.itemText}>????ng xu???t</Text>
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