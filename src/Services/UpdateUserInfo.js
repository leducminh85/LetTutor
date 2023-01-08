import axios from "axios";
const baseUrl = 'https://sandbox.api.lettutor.com/';


export default async function GetUserInfo(token, user) {
  console.log(token, user)
  axios({
    method: 'PUT',
    url: baseUrl + 'user/info',
    headers: {
      'Authorization': 'Bearer ' + token
    },
    data:user

  },)

    .then((response) => {
      console.log('update user info success')
    })
    .catch((error) => {
      // handle error
      console.log(error)
      console.log('update user info fail')
    })






}