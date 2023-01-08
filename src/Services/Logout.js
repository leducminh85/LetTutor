import AsyncStorage from '@react-native-async-storage/async-storage';


export default async function Logout() {
    try {
        await AsyncStorage.removeItem('token');
        console.log('logout success')

    }
    catch (exception) {
        console.log('logout error')
    }
}