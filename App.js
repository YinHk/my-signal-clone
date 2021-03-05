import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import HomePage from './HomePage'
import InfoPage from './InfoPage'

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerTitleAlign:"center",
      headerStyle:{ backgroundColor:'#0080e8'},
      headerTintColor: '#ffffff'
    }}>
       <Stack.Screen name="Login" component={LoginPage}  />
       <Stack.Screen name="Register" component={RegisterPage} />
       <Stack.Screen name="Personal Information" component={InfoPage} />
       <Stack.Screen name="Home" component={HomePage}
       options={{ title: 'Signal clone' }} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
