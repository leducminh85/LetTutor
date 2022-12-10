import list from '../../assets/img/list.png'
import logo from '../../assets/img/logo.png'
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native'
export default function Header({ navigation }) {

    return (
        <View style={styles.header}>
            <TouchableOpacity style={{ flexDirection: "row", }}>
                <Image style={styles.logo} source={logo} resizeMode='contain' ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('menu')}>
                <Image style={styles.listIcon} source={list}  resizeMode='contain'></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

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
        width: '75%',
    },
    listIcon: {
        height: 20,
        width: 20,

    },
})