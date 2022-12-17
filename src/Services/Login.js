import axios from "axios";
const baseUrl = 'https://sandbox.api.lettutor.com/';
import deviceStorage from './DeviceStorage';


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
        console.log('success') 
        setLoginState(response)
        deviceStorage.saveKey("token", response.data.tokens);

    })
        .catch(function (error) {
            // handle error
            console.log('error') 
            setLoginState(error)

        })





}