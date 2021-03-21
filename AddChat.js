
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import * as Contacts from 'expo-contacts'
import List from './List'

export default function AddChat(){
    
    const [contact, setContact] = useState([])

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Add Chat',
          headerLeft: () => <TouchableOpacity onPress={()=> navigation.goBack()}>
                               <Entypo name="back" size={30} color="#ffffff"/>
                            </TouchableOpacity>,  
          headerLeftContainerStyle:{paddingLeft:15,paddingBottom:5}
        })
    
      }, [navigation])
    

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [
                Contacts.Fields.Name,
                Contacts.Fields.PhoneNumbers,
                Contacts.Fields.Image ],
            });
    
            if (data.length > 0) {
                setContact(data)
              console.log(data[8].name)
            }
          }
        })()

      }, [])


      const contactList = contact.map(item => <List id={item.id} name={item.name} phone={item.phone} />)

      return (
        <ScrollView>
           {contactList}
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
    }
})