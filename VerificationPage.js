import * as React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { firebase } from './firebase'



export default function VerificationPage() {
 
    const [verificationCode, setVerificationCode] = React.useState()
    const [verificationId, setVerificationId] = React.useState()


  return(

   <View style={styles.container}>
     <Text style={{marginTop:20, marginBottom:50}}>Enetr Verification code</Text>
     <View style={{marginBottom:10,width:"60%"}}>
        <TextInput
          placeholder="verification Code"
          onChangeText={text => setVerificationCode(text)}
          keyboardType="number-pad"
          style={styles.input}
        />
     </View>
     <View>
      <Button
        title="Confirm"
        disabled={!verificationId}
        onPress={async () => {
          try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            await firebase.auth().signInWithCredential(credential);
            showMessage({ text: 'Phone authentication successful 👍' });
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
          }
        }}
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




