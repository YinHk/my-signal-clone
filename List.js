import { ListItem, Avatar } from 'react-native-elements'
import React, { useEffect, useLayoutEffect } from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import * as Contacts from 'expo-contacts'




export default function List(props){

const avatar_url = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'

    return(
        <TouchableOpacity>
         <ListItem key={props.id} bottomDivider>
              <Avatar rounded title={props.name} size="small" source={{uri:avatar_url}}/>
              <ListItem.Content>
                <ListItem.Title>{props.name}</ListItem.Title>
                <ListItem.Subtitle>{props.phone}</ListItem.Subtitle>
              </ListItem.Content>
         </ListItem>
        </TouchableOpacity>
        


    )
}