import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, useWindowDimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config'
import { async } from '@firebase/util'
import SignUpScreen from './SignUpScreen'
import Logo from '../assets/temporaryLogoApp.png'


const LoginScreen = () => { 
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {height} = useWindowDimensions()


 loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch(error){
      alert(error.message)
    }
  }

  return (
    <View style={styles.container}
    behavior = "padding"
    >
    <View style={styles.rectangleOverlay} >
        <Image source={Logo} 
               style={[styles.logo, {height: height * 0.3}]} 
               resizeMode="contain"/>
        <View style={styles.InputContainer}>
            <TextInput
              placeholder="Email"
              onChangeText={(email) => setEmail(email)}
              autoCapitalize="none"
              autoCorrect={false}
              style = {styles.input}
            />
            <TextInput
              placeholder="Password"
              onChangeText={(password) => setPassword(password)}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              style = {styles.input}
            />
        </View>

        <TouchableOpacity
            onPress={() => loginUser(email, password)}
            style={styles.button}
        >
          <Text style={styles.buttonText}>
          Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={styles.signUpButton}
        >
        
          <Text style={styles.signUpText}>
          Don't have an account? Sign up now!
          </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#df28e9',
  },
  rectangleOverlay: {
    flex: 2,
    marginTop: '20%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: '20%',
    borderTopLeftRadius: '20%',
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    marginVertical: '10%',
  },
  InputContainer: {
    width: '80%',
    marginTop: 0,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 75,
    marginTop: 15,
  },
  button: {
    marginTop: "50%",
    height: 50,
    width: 200,
    backgroundColor: '#28b4ee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
        
  },
  signUpButton: {
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'regular',
    fontSize: 22,
    color: '#fff',
  },  
  signUpText: {
    fontWeight: 'regular',
    fontSize: 16,
    color: '#292929',
  },
});

