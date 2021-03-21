import React, { useLayoutEffect, useState, useRef, 
                useEffect, useCallback } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, 
         ImageBackground, Image } from 'react-native'



function CameraPreview ({route,navigation}) {

 const {URL,Width,Height} = route.params
 console.log(URL)
 console.log(Width)
 console.log(Height)
 const imgRef = useRef()

 useLayoutEffect(() => {

    navigation.setOptions({headerShown:false})
 }, [navigation])

 const onUpdate = useCallback(({ x, y, scale }) => {
  const { current: img } = imgRef;

  if (img) {
    const value = make3dTransformValue({ x, y, scale });

    img.style.setProperty("transform", value);
  }
 }, [])

   
  return(
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center'
      }}>
      
      <Button  title="Go back" onPress={()=> navigation.goBack()} />
     
       <Image
          ref={imgRef}
          style={{width:"100%",height:"80%"}}
          source={{uri:URL}}
          resizeMode="contain"
        />
      
      
    </View>
  )

}




export default CameraPreview