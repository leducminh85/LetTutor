import axios from "axios";
import { useState } from "react";
const baseUrl = 'https://sandbox.api.lettutor.com/';


export default async function Login( email, password, setLoginState) {
    console.log(email, password)

    axios({
        method: 'POST',
        url: baseUrl + 'auth/login',
        data: {
            "email": email,
            "password": password
        }

    },).then( (response) => {
        // handle success
        console.log('success') 
        setLoginState(response)
    })
        .catch(function (error) {
            // handle error
            console.log('error') 
            setLoginState(error)

        })





}