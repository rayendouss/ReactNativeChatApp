import { NavigationContainer } from "@react-navigation/native"
import React, { useState } from "react"
import { View ,StyleSheet} from "react-native"
import {Input ,Button} from "react-native-elements"
import {auth} from "../firebase"
const RegisterScreen=({navigation}) => {
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [imageURl,setImageURl]=useState('')

    const register=() => {
        auth.createUserWithEmailAndPassword(email, password)
         .then((userCredential) => {
           var user = userCredential.user;
           user.updateProfile({
               displayName:name,
               photoURL: imageURl?imageURl: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
           }).then(function(){

           }).catch(function(error){
               
           })
           navigation.popToTop()
           })
         .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
    alert(errorMessage)
           });
    }
    return (
        <View style={styles.container}>
            <Input
          placeholder ="Enter your name"
          label="Name"
          leftIcon={{type:"material" , name:"badge"}}
          value={name}
          onChangeText={text=>setName(text)}
          />

          <Input
          placeholder ="Enter your email"
          label="Email"
          leftIcon={{type:"material" , name:"email"}}
          value={email}
          onChangeText={text=>setEmail(text)}
          />
                 <Input
          placeholder ="Enter your password"
          label="password"
          leftIcon={{type:"material" , name:"lock"}}
          value={password}
          onChangeText={text=>setPassword(text)}
          secureTextEntry
          />
            <Input
          placeholder ="Enter your image"
          label="Profile Picture"
          leftIcon={{type:"material" , name:"face"}}
          value={imageURl}
          onChangeText={text=>setImageURl(text)}
          />
       
          
          <Button title="Register" style={ styles.button} onPress={register}/>
      
        </View>
    )
}
export default RegisterScreen

const styles = StyleSheet.create({
    button:{
        width:200,
        marginTop: 10
    },
    container: {
        padding:10,
        alignItems:"center",
        flex:1
    }
})