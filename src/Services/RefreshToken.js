import axios from "axios";
const baseUrl = 'https://sandbox.api.lettutor.com/';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default async function RefreshToken(data) {
  console.log(      "refreshToken", JSON.stringify(data.refresh.token)  )
  axios({
    method: 'POST',
    url: baseUrl + 'auth/refresh-token',
    data: {
      "refreshToken": data.refresh.token,
      "timezone": 7
    }

  },)

    .then(async (response) => {
      try {
        await AsyncStorage.setItem('token', JSON.stringify(response.data.tokens))
        console.log('refresh token')
      } catch (error) {
        console.log(error)
      }
    })
    .catch(function (error) {
      // handle error
      console.log('refresh token error')
      console.log(error)

    })





}