import React, { useLayoutEffect, useState, useRef, useEffect } from 'react'
import { StyleSheet, TextInput, View, ScrollView,
        Keyboard, Button, TouchableOpacity, Text,  Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'



function HomePage() {

  const navigation = useNavigation()
  const [search, setSearch] = useState(null)
  const [show, setShow] = useState(false)
  const [showbtn, setShowbtn] = useState(false)
  const lengthAnim = useRef(new Animated.Value(100)).current

  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chat App',
      headerLeft: () => <TouchableOpacity>
                         <Avatar rounded source={{
                          uri:
                         'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}/>
                        </TouchableOpacity>,  
      headerLeftContainerStyle:{paddingLeft:15,paddingBottom:5},
      headerRight: () => <View style={{justifyContent:'space-between',flexDirection:"row"}}>
                          <TouchableOpacity 
                           style={{paddingRight:30}}
                           onPress={()=> navigation.navigate('Camera')}>
                           <Icon name="camera" size={23} color="#ffffff" />
                          </TouchableOpacity>
                          <TouchableOpacity 
                           style={{paddingRight:15}}
                           onPress={()=> navigation.navigate('AddChat')}>
                           <MaterialCommunityIcons name="pencil" size={25} color="#ffffff" />
                          </TouchableOpacity>
                         </View>
    })

  }, [navigation])


  const updateSearch = (search) => {
    setSearch(search)
    setShowbtn(true)
  }


  useLayoutEffect(() => {
    const  _keyboardDidShow = () => {
     Animated.timing(lengthAnim, {
      toValue: 70,
      duration: 50,
      useNativeDriver: true
     }).start(({ finished }) => {setShow(true)})
    }

    const _keyboardDidHide = () => {
     Animated.timing(lengthAnim, {
      toValue: 100,
      duration: 50,
      useNativeDriver: true
     }).start(({ finished }) => {setShow(false)
                                 setSearch('')
                                 setShowbtn(false)})
    }

    Keyboard.addListener("keyboardDidShow", _keyboardDidShow)
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide)
    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow)
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide)
    }
  }, [])

  

    return(
      
      <ScrollView keyboardShouldPersistTaps='always'>
       <View style={styles.container}>
        <View style={styles.section}>
        <Animated.View style={Object.assign({width:`${lengthAnim}%`},styles.searchSection)}>
          <Fontisto name="search" size={20} color="#a9a9a9" style={{paddingLeft:10,paddingRight:5}} />
          <TextInput 
           placeholder="Search"
           placeholderTextColor="#a9a9a9"
           onChangeText={updateSearch}
           value={search}
           style={styles.input}
           />
          <View>{showbtn?<TouchableOpacity style={{paddingRight:8}}
                           onPress={()=>{setSearch('')
                                         setShowbtn(false)}}>
                         <Entypo name="circle-with-cross" size={20} 
                          color="#a9a9a9" /></TouchableOpacity>:null}</View>
        </Animated.View>
        <View>{show?<TouchableOpacity
                       onPress={Keyboard.dismiss}>
                       <Text style={styles.text}>Cancel</Text>
                    </TouchableOpacity>:null}
        </View>
       </View>
       </View>
      </ScrollView>
    )

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "column"
  },

  input: {
      fontSize:17,
      flex: 1
  },

  text: {
    color:"#1784ff",
    fontSize:17,
    paddingTop:11,
    paddingLeft:6
  },

  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "92%",
    height: 42,
    marginTop: 10
  },

  searchSection: {
    backgroundColor: "#e3e3e3",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    //width: "100%",
    height: 42,
    marginTop: 10,
    flex: 1
  }


})


export default HomePage