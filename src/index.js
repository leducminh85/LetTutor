import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ForgotPasswordView from './pages/ForgotPassword/ForgotPassword'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'
import TeacherDetail from './pages/TeacherDetail/TeacherDetail'
import MenuList from './pages/MenuList/MenuList'
import { StateProvider } from './Context/StateContext';

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
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{ headerShown: false }} name="login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="home" component={Home} />
          <Stack.Screen options={{ headerShown: false }} name="register" component={Register} />
          <Stack.Screen options={{ headerShown: false }} name="profile" component={Profile} />
          <Stack.Screen options={{ headerShown: false }} name="forgotPassword" component={ForgotPasswordView} />
          <Stack.Screen options={{ headerShown: false }} name="teacherDetail" component={TeacherDetail} />
          <Stack.Screen options={{ headerShown: false }} name="menu" component={MenuList} />

        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}

export default App;