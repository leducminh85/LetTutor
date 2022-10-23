import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Login from './component/Login'
import Register from './component/Register'
import ForgotPassword from './component/ForgotPassword'
import Profile from './component/Profile'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 50,

  },
});


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="profile" component={Profile} />
        {/* <Stack.Screen options={{ headerShown: false }} name="login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="register" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="forgotPassword" component={ForgotPassword} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;