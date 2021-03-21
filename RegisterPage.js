import * as React from 'react'
import { StyleSheet, Platform, Text, View, TextInput, 
         KeyboardAvoidingView, Alert, Keyboard,
         TouchableWithoutFeedback, Button } from 'react-native'
import { firebase } from './firebase'



function RegisterPage({ navigation }) {

  const [email, setEmail] = React.useState('')
  const [pw, setPw] = React.useState('')
  const [confirmPw, setConfirmPw] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0
  
  const CompleteRegister = () => Alert.alert("Successful","registration complete",
          [{text: "back",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
           },
           { text: "Go to Login", onPress: () => {navigation.navigate('Login')}
           }
          ],
          { cancelable: false }
    ) 
  

  const SendInfo = () => {
        

      if (pw!=''||email!=''||confirmPw!=''||firstName!=''||lastName!='') {
         if(pw==confirmPw){
          firebase.auth().createUserWithEmailAndPassword(email, pw)
            .then((userCredential) => {
                  var user = userCredential.user
                  setEmail(''),
                  setPw(''),
                  setConfirmPw(''),
                  setFirstName(''),
                  setLastName(''),
                  CompleteRegister(),
                  console.log('send')}
                  )
                .catch ((err) => {Alert.alert("Oops! something is wrong, please try again", err.message)})
         }else  Alert.alert('',"Both passwords must be same, please try again!")
      } else Alert.alert('',"Please fill in all the information")
  }



    return(

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={styles.container}
      >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{width:"100%",alignItems:"center"}}>
      <View style={{marginBottom:50,width:'100%',alignItems:"center"}}>
       <Text style={{fontSize:25}}>Registration</Text>
      </View>
      <View style={{marginBottom:20,width:"70%"}}>
       <TextInput 
        placeholder="First Name"
        placeholderTextColor="#636363"
        onChangeText={text => setFirstName(text)}
        value={firstName}
        style={styles.input}
       />
      </View>
      <View style={{marginBottom:20,width:"70%"}}>
       <TextInput 
        placeholder="Last Name"
        placeholderTextColor="#636363"
        onChangeText={text => setLastName(text)}
        value={lastName}
        style={styles.input}
       />
      </View>
      <View style={{marginBottom:20,width:"70%"}}>
       <TextInput 
        placeholder="Email"
        placeholderTextColor="#636363"
        onChangeText={text => setEmail(text)}
        value={email}
        style={styles.input}
       />
      </View>
      <View style={{marginBottom:20,width:"70%"}}>
       <TextInput 
        placeholder="Password"
        placeholderTextColor="#636363"
        onChangeText={text => setPw(text)}
        value={pw}
        secureTextEntry={true}
        style={styles.input}
       />
      </View>
      <View style={{marginBottom:40,width:"70%"}}>
       <TextInput 
        placeholder="confirm password"
        placeholderTextColor="#636363"
        onChangeText={text => setConfirmPw(text)}
        value={confirmPw}
        secureTextEntry={true}
        style={styles.input}
       />
      </View>
      <View style={{width:'40%',marginTop:30}}>
        <Button
          title="Register"
          onPress={SendInfo}
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
      justifyContent: "center"
    },

    input: {
        height:50,
        borderBottomWidth: 1,
        fontSize:18
    },

    inner: {
        width: "100%",
        height: "100%",
        flex: 1,
        padding: 24
    },

    scrollview: {
        width: "100%"
    }


})



export default RegisterPage