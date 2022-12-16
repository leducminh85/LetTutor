import axios from "axios";
import { useState } from "react";
const baseUrl = 'https://sandbox.api.lettutor.com/';


export default async function VerifyAccount(token) {

    axios({
        method: 'GET',
        url: baseUrl + 'auth/verifyAccount?token=' + 'token',

    },).then( (response) => {
        console.log('success') 
        setRegisterState(response)
    })
        .catch((error) => {
            // handle error
            setRegisterState(error.response)
        })





}