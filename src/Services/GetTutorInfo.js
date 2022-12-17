import axios from "axios";
const baseUrl = 'https://sandbox.api.lettutor.com/';


export default async function GetTutorInfo(token, id, setTutorInfo) {
    console.log('Get tutor list success') 

    axios({
        method: 'GET',
        url: baseUrl + 'tutor/' + id ,
        headers: {
            'Authorization': 'Bearer ' + token
        }, 
    },).then( (response) => {
        console.log('get tutor info success')
        setTutorInfo(response.data)
    })
        .catch((error) => {
            // handle error
            console.log(error) 

            setTutorInfo(error.response)
        })





}