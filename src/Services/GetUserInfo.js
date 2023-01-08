import axios from "axios";
const baseUrl = 'https://sandbox.api.lettutor.com/';


export default async function GetUserInfo(token, setUser) {
  axios({
    method: 'GET',
    url: baseUrl + 'user/info',
    headers: {
      'Authorization': 'Bearer ' + token
    },

  },)

    .then((response) => {
      setUser(response.data)
      console.log('get user info success')
    })
    .catch((error) => {
      // handle error
      console.log(error)
      console.log('get user info fail')
      setUser(error.response)
    })






}