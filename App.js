import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import HomePage from './HomePage'
import CameraView from './CameraView'
import CameraPreview from './CameraPreview'
import AddChat from './AddChat'


const Stack = createStackNavigator()

export default function App() {
  return (

   <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:'#1784ff',height:90},
      headerTintColor: '#ffffff',
      gestureEnabled: false
    }}>
       <Stack.Screen name="Login" component={LoginPage}  />
       <Stack.Screen name="Register" component={RegisterPage} />
       <Stack.Screen name="Home" component={HomePage} />
       <Stack.Screen name="Camera" component={CameraView} />
       <Stack.Screen name="Preview" component={CameraPreview} />
       <Stack.Screen name="AddChat" component={AddChat} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}


