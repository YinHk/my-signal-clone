import React, { useLayoutEffect, useState, useRef, useEffect } from 'react'
import { Camera } from 'expo-camera'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function CameraView () {
   
   const navigation = useNavigation()
   const [hasPermission, setHasPermission] = useState(null)
   const [type, setType] = useState(Camera.Constants.Type.back)
   const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off)
   const [cameraReady, setCameraReady] = useState(false)
   const [picCaptured, setPicCaptured] = useState(null)
   const [flashColor, setFlashColor] = useState("#ffffff")
   
   const cameraRef = useRef()


   const onCameraReady = () => {setCameraReady(true)}
   
   useLayoutEffect(() => {

     navigation.setOptions({headerShown:false,mode:"modal" })

   }, [navigation])



   useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
     }, [])


   if (hasPermission === null) {
    return <View />
   }
   if (hasPermission === false) {
    return <Text>No Permission access to camera</Text>
   }
   
   

   const takePhoto = async () => {
    const options = { quality: 1, base64: true, skipProcessing: true }
    if(cameraReady==true){
       await cameraRef.current.takePictureAsync(options)
        .then((data)=>{
          navigation.navigate('Preview',{
            URL:data.uri,
            Width:data.width,
            Height:data.height
          })
         
        })
    }
      
   }


   return(
     <View style={styles.container}>

        <View style={styles.top}>
         <TouchableOpacity style={{alignSelf:'flex-start',paddingLeft:10,paddingTop:10}}
          onPress={()=> navigation.goBack()}>
          <Entypo name="cross" size={35} color="#ffffff" />
         </TouchableOpacity>
         <TouchableOpacity style={{paddingLeft:200,paddingTop:12}}
           onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back)}}>
          <Entypo name="cycle" size={35} color="#ffffff" />
         </TouchableOpacity>
         <TouchableOpacity style={{paddingLeft:35,paddingTop:12}}
          onPress={()=>{
              if (flashMode === 'off'){
                setFlashMode('on')
                setFlashColor("#ffd642")}
              else {setFlashMode('off')
                    setFlashColor("#ffffff")}
           }}>
          <Entypo name="flash" size={35} color={flashColor} />
         </TouchableOpacity>
        </View>
      
      
      <Camera style={styles.camera} type={type} 
       autofocus={Camera.Constants.AutoFocus.on}
       onCameraReady={onCameraReady}
       flashMode={flashMode}
       ref={cameraRef}
      >
      </Camera>

     <View style={{flex:1,justifyContent:'flex-end'}}>
        <View style={styles.bottom}>
         <TouchableOpacity style={{paddingRight:80,paddingTop:35}}>
          <MaterialIcons name="photo" size={35} color="#ffffff" />
         </TouchableOpacity>
         <TouchableOpacity onPress={takePhoto}>
          <Entypo name="circle" size={90} color="#ffffff" />
         </TouchableOpacity>
         <TouchableOpacity style={{paddingLeft:80,paddingTop:35}}>
          <Entypo name="plus" size={35} color="#ffffff"/>
         </TouchableOpacity>
        </View>
       </View>

     </View>

   )

}


const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor:"#000",
      width:"100%",
      height:"100%"
    },
    
    camera: {
      height:"60%",
      width:"100%"
    },

    top: {
      flexDirection:"row",
      paddingTop:50,
      paddingBottom:10,
      justifyContent:'flex-start'
    },

    bottom: {
      flexDirection:"row",
      justifyContent:"center",
      paddingBottom:35
    }

})


export default CameraView