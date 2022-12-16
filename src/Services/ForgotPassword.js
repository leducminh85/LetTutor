import axios from "axios";
const baseUrl = 'https://sandbox.api.lettutor.com/';


export default async function ForgotPassword(email, setForgotPassState) {
    axios({
        method: 'POST',
        url: baseUrl + 'user/forgotPassword',
        data: {
            "email": email,
        }
    },).then( (response) => {
        console.log('success') 
        setForgotPassState(response)
    })
        .catch((error) => {
            // handle error
            console.log(error) 

            setForgotPassState(error.response)
        })





}