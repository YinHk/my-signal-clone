import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, 
         Image, Alert, Button, Keyboard,
         KeyboardAvoidingView, Platform,
         TouchableWithoutFeedback } from 'react-native'
import { firebase } from './firebase'

function LoginPage({ navigation }) {

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    const GotoHome = ()=> navigation.navigate('Home')
    const GotoRister = () => navigation.navigate('Register')

    const SignIn = () => {

     if(email!=''&&pw!=''){

      firebase.auth().signInWithEmailAndPassword(email, pw)
      .then((userCredential) => {
        var user = userCredential.user
        GotoHome()} 
       ).catch ((err) => { Alert.alert("Oops! please try again", err.message)
                           setEmail('')
                           setPw('')
                           })

     }else Alert.alert("","Please fill in email and password")

    }

    return(

    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    > 
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <Image style={{width:100,height:100,borderRadius:18,marginBottom:50}} source={require('./src/logo4.png')}/>
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
        secureTextEntry={true}
        style={styles.input}
       />
     </View>
      <View style={{marginBottom:30,marginTop:50,width:'30%'}}>
       <Button
          title="Login"
          onPress={SignIn}
        />
      </View>
      <View style={{width:'30%'}}>
        <Button
          title="Register"
          onPress={GotoRister}
        />
       </View>
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>    
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
        fontSize:18  
    },


})



export default LoginPage