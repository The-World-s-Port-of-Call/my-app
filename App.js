import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import ForgetPassswordScreen from './app/screens/ForgetPasswordScreen';
import EditUserProfileScreen from './app/screens/EditUserProfileScreen';
import Tabs from './navigation/Tabs';
import CourseListing1 from "./app/screens/CourseListing1"
import CurrentCoursesScreen from './app/screens/CurrentCoursesScreen';
import PastCoursesScreen from './app/screens/PastCoursesScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = { {headerShown: false}} name ="login" component={LoginScreen} />
        <Stack.Screen options = { {headerShown: false}} name ="register" component={RegistrationScreen} /> 
        <Stack.Screen options = { {headerShown: false}} name ="home" component={HomeScreen} /> 
        <Stack.Screen options = { {headerShown: false}} name ="forgetPassword" component={ForgetPassswordScreen} />
        <Stack.Screen options = { {headerShown: false}} name ="editUserProfile" component={EditUserProfileScreen} />
        <Stack.Screen options = { {headerShown: false}} name ="tabs" component={Tabs} /> 
        <Stack.Screen options = { {headerShown: false}} name ="listing" component={CourseListing1} /> 
        <Stack.Screen options = { {headerShown: false}} name ="pastCourses" component={PastCoursesScreen} /> 
        <Stack.Screen options = { {headerShown: false}} name ="currentCourses" component={CurrentCoursesScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>

    );
    
    
      
  
}



export default App;
