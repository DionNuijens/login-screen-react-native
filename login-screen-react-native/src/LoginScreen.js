import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config'
import { async } from '@firebase/util'
import SignUpScreen from './SignUpScreen'


const LoginScreen = () => { 
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


 loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch(error){
      alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
        <Text style={styles.titleEmail}>
            Login 
        </Text>
        <View style={styles.InputBox}>
            <TextInput style={styles.emailInput}
              placeholder="Email"
              onChangeText={(email) => setEmail(email)}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput style={styles.passwordInput}
              placeholder="password"
              onChangeText={(password) => setPassword(password)}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
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
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,

  },
  titleEmail: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  InputBox: {
    marginTop: 40,
  },
  emailInput: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#c228ee',
    marginBottom: 10,
    textAlign: 'center',
  },
  passwordInput: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#c228ee',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 50,
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
    fontSize: 18,
  },
});

