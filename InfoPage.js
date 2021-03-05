import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'


function InfoPage({nevigator}) {
  
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')

    return(

      <View style={styles.container}>
        <View style={{marginBottom:10,marginTop:50,width:"60%"}}>
         <TextInput 
          placeholder="First Name (optional)"
          placeholderTextColor="#636363"
          onChangeText={text => setFirst(text)}
          value={first}
          style={styles.input}
         />
        </View>
        <View style={{marginBottom:10,width:"60%"}}>
         <TextInput 
          placeholder="Last Name (required)"
          placeholderTextColor="#636363"
          onChangeText={text => setLast(text)}
          value={last}
          style={styles.input}
         />
        </View>
        <View style={{marginBottom:30,marginTop:250,width:'40%'}}>
        <Button
          title="Continue"
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
      //justifyContent: "center",
    },

    input: {
        height:50,
        borderBottomWidth: 1,
        fontSize:18,
        outlineWidth: 0
    },


})

export default InfoPage