import axios from "axios";
const baseUrl = 'https://sandbox.api.lettutor.com/';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default async function Login( email, password, setLoginState) {
    axios({
        method: 'POST',
        url: baseUrl + 'auth/login',
        data: {
            "email": email,
            "password": password
        }

    },)
    .then(res=>res.json())
    .then( async (response) => {
        try {
            await AsyncStorage.setItem('token',response.data.tokens)

            console.log(response.data.tokens)
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