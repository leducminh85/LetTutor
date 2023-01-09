import axios from "axios";
const baseUrl = 'https://sandbox.api.lettutor.com/';


export default async function GetTutorList(token, page, setTutorListState) {
    console.log('Get tutor list success') 

    axios({
        method: 'GET',
        url: baseUrl + 'tutor/more?perPage=15&page=1' ,
        headers: {
            'Authorization': 'Bearer ' + token
        }, 
    },).then( (response) => {
        setTutorListState(response.data)
    })
        .catch((error) => {
            // handle error
            console.log(error) 

            setTutorListState(error.response)
        })





}