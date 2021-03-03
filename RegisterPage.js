import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'


function RegisterPage({ navigation }) {

  const [phone, setPhone] = useState('')
  const [pw, setPw] = useState('')
  const [cpw, setCpw] = useState('')

    return(

     <View style={styles.container}>
      <View style={{marginBottom:10,width:"60%"}}>
       <TextInput 
        placeholder="Your phone number"
        placeholderTextColor="#636363"
        onChangeText={text => setPhone(text)}
        value={phone}
        style={styles.input}
       />
     </View>
     <View style={{ marginBottom:50,marginTop:50,width:"60%"}}>
       <TextInput 
        placeholder="Password"
        placeholderTextColor="#636363"
        onChangeText={text => setPw(text)}
        value={pw}
        style={styles.input}
       />
       <TextInput 
        placeholder="Confirm password"
        placeholderTextColor="#636363"
        onChangeText={text => setCpw(text)}
        value={cpw}
        style={styles.input}
       />
     </View>
     <View style={{marginBottom:30,marginTop:50,width:'40%'}}>
      <Button
       title="Register Now"
       buttonStyle={{backgroundColor:"#0080e8",borderRadius:25,height:50}}
       />
     </View>
     </View>
    )



}


const styles = StyleSheet.create({

    container: {
      flex: 1,
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },

    input: {
        height:50,
        borderBottomWidth: 1,
        fontSize:18,
        outlineWidth: 0
    },


})



export default RegisterPage