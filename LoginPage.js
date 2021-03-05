import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import { firebase } from './firebase'

function LoginPage({ navigation }) {

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    const GotoHome = ()=> navigation.navigate('Home')
 
    const SignIn = () => {

      firebase.auth().signInWithEmailAndPassword(email, pw)
      .then((userCredential) => {
        var user = userCredential.user
        GotoHome} 
       ).catch ((err) => {Alert.alert("Oops! something is wrong, please try again", err.message)})

    }

    return(

     
      <View style={styles.container}>
      <Image style={{width:100,height:100,borderRadius:18,marginBottom:50}} source={require('./src/logo.png')}/>
      <View style={{ marginBottom: 10, width: "60%"}}>
       <TextInput 
        placeholder="Account(Email)"
        placeholderTextColor="#636363"
        onChangeText={text => setEmail(text)}
        value={email}
        style={styles.input}
       />
     </View>
     <View style={{ marginBottom: 20, marginTop:30, width: "60%"}}>
       <TextInput 
        placeholder="Password"
        placeholderTextColor="#636363"
        onChangeText={text => setPw(text)}
        value={pw}
        style={styles.input}
       />
     </View>

      <View style={{marginBottom:30,marginTop:50,width:'30%'}}>
       <Button
          title="Login"
          onPress={SignIn}
          buttonStyle={{backgroundColor:"#0080e8",borderRadius:25,height:50}}
        />
      </View>
      <View style={{width:'35%'}}>
        <Button
          title="New User"
          onPress={() => navigation.navigate('Register')}
          secureTextEntry={true}
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
        //outlineWidth: 0
    },


})



export default LoginPage