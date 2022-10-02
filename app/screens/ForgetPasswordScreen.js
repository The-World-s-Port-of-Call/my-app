import React, {useEffect, useState} from 'react'
import {Text, ImageBackground, StyleSheet, View, TextInput } from "react-native"
import AppButton from '../components/AppButton' 
import {ERRORS} from '../constants/AuthErrorMessages'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';

import { auth } from '../../firebase'
import {sendPasswordResetEmail} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

const ForgetPasssword = () => {
    const [email,setEmail] = useState('')

    const resetPassword = () => {
        sendPasswordResetEmail(auth,email)
          .then(() => {
            window.alert("Please check the instructions in your email!")
          })
          .catch(error => {
            const errorCode = String(error.code);
            window.alert(ERRORS[errorCode]);
            
          })
      }

      const navigation = useNavigation();

  return (
    <ImageBackground 
          style = {styles.imageContainer}
          blurRadius = {5}
          source = {require('../assets/LoginScreen.jpg')}>
    <Text style={styles.text}>Forgot Password?</Text>
    <View style = {styles.backIcon}>
                    <MaterialCommunityIcons name='arrow-left-bold' 
                    color={colors.primary}
                    size={35}
                    onPress={() => navigation.replace("login")} />
    </View>
    <View style = {styles.txt}>
    <TextInput
              placeholder = "Email" 
              value = {email}
              onChangeText = {text => setEmail(text)}
              style={styles.textInput} 
    >
    </TextInput>
    <View style = {{padding: 20}}>
    <AppButton title="Send Email" onPress={resetPassword} />
    </View>

    </View>

    </ImageBackground>
  )
}

export default ForgetPasssword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 150
    },
    text: {
      color: '#333',
      fontSize: 24,
      marginLeft: 30,
      paddingTop: 100,
      color: colors.white,
      fontWeight: 'bold',
      top: 20,
      left: 5
    },
    buttonContainer: {
      margin: 25,
      bottom: 500,
    },
   txt: {
        marginTop:12, 
        paddingTop: 10,
        
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        backgroundColor: 'white',
        width: '80%',
        alignSelf: 'center',
        
    },
    imageContainer: {
      height: '100%',
      width: '100%',

    },
    backIcon:{
      bottom: 95,
      paddingLeft: 15
      
    },

  })