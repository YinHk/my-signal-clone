import * as React from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import { firebase } from './firebase'



function RegisterPage({ navigation }) {

  const [email, setEmail] = React.useState()
  const [pw, setPw] = React.useState()
  const [confirmPw, setConfirmPw] = React.useState()
  const [firstName, setFirstName] = React.useState()
  const [lastName, setLastName] = React.useState()
  //const [send, setSend] = React.useState(false)
  

  
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
  
    /**/

  const SendInfo = () => {
        
        //const fullName = firstName+lastName
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
       
  }




    return(
    <KeyboardAvoidingView>
     <View style={styles.container}>
      <View style={{marginBottom:50,marginTop:50,width:'30%'}}>
       <Text style={{fontSize:25}}>Registration</Text>
      </View>
      <View style={{marginBottom:10,width:"60%"}}>
       <TextInput 
        placeholder="First Name"
        placeholderTextColor="#636363"
        onChangeText={text => setFirstName(text)}
        value={firstName}
        style={styles.input}
       />
      </View>
      <View style={{marginBottom:10,width:"60%"}}>
       <TextInput 
        placeholder="Second Name"
        placeholderTextColor="#636363"
        onChangeText={text => setLastName(text)}
        value={lastName}
        style={styles.input}
       />
      </View>
      <View style={{marginBottom:10,width:"60%"}}>
       <TextInput 
        placeholder="Email"
        placeholderTextColor="#636363"
        onChangeText={text => setEmail(text)}
        value={email}
        style={styles.input}
       />
      </View>
      <View style={{marginBottom:10,width:"60%"}}>
       <TextInput 
        placeholder="Password"
        placeholderTextColor="#636363"
        onChangeText={text => setPw(text)}
        value={pw}
        secureTextEntry={true}
        style={styles.input}
       />
      </View>
      <View style={{marginBottom:50,width:"60%"}}>
       <TextInput 
        placeholder="confirm password"
        placeholderTextColor="#636363"
        onChangeText={text => setConfirmPw(text)}
        value={confirmPw}
        secureTextEntry={true}
        style={styles.input}
       />
      </View>
      <View style={{width:'40%'}}>
        <Button
          title="Register"
          buttonStyle={{backgroundColor:"#0080e8",borderRadius:25,height:50}}
          onPress={SendInfo}
        />
      </View>
     </View>
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
        fontSize:18,
        //outlineWidth: 0
    },


})



export default RegisterPage