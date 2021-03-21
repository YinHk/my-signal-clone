import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from './HomePage'
import CameraView from './CameraView'

function MainStackScreen() {

   const MainStack = createStackNavigator()

   return(

    <MainStack.Navigator mode="modal" headerMode="none">
     <MainStack.Screen name="Home" component={HomePage} />
     <MainStack.Screen name="Camera" component={CameraView} />
    </MainStack.Navigator>

   )


}

  
export default MainStackScreen
