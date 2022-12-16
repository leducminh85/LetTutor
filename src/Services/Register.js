import axios from "axios";
import { useState } from "react";
const baseUrl = 'https://sandbox.api.lettutor.com/';


export default async function Register( email, password, setRegisterState) {

    axios({
        method: 'POST',
        url: baseUrl + 'auth/register',
        data: {
            "email": email,
            "password": password,
        }

    },).then( (response) => {
        // handle success
        console.log('success') 
        setRegisterState(response)
    })
        .catch((error) => {
            // handle error
            setRegisterState(error.response)
        })





}