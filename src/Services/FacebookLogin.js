import axios from "axios";
const baseUrl = 'https://sandbox.api.lettutor.com/';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as Facebook from 'expo-facebook';


export default async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: '4782001715381188',
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        console.log(token)
       
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }