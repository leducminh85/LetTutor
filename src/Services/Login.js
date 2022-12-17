import axios from "axios";
const baseUrl = 'https://sandbox.api.lettutor.com/';
import deviceStorage from './DeviceStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default async function Login( email, password, setLoginState) {
    console.log(email, password)

    axios({
        method: 'POST',
        url: baseUrl + 'auth/login',
        data: {
            "email": email,
            "password": password
        }

    },).then( async (response) => {
        // handle success
        try {
            const jsonValue = JSON.stringify(response.data.tokens)

            await AsyncStorage.setItem(
                "token", jsonValue
            );
            console.log('save token')
          } catch (error) {
            // Error saving data
            console.log(error)
          }

        console.log('login success') 
        setLoginState(response)
    

    })
        .catch(function (error) {
            // handle error
            console.log('error') 
            setLoginState(error)

        })





}