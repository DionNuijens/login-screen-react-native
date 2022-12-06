import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, useWindowDimensions  } from 'react-native'
import React, { useState, useEffect } from 'react'
import spongebob from '../assets/spongebob.jpg'
import { firebase } from '../config'


const HomeScreen = () => {

  const [userName, setUserName] = useState('')
  const {height} = useWindowDimensions()

  // useEffect(() => {
  //   firebase.firestore().collection("users")
  //   .doc(firebase.auth().currentUser.uid).get()
  //   .then((snapshot) => {
  //     if(snapshot.exists){
  //       setUserName(snapshot.data())
  //     }
  //     else {
  //       console.log('User does not exist')
  //     }
  //   })
  // }, [])

  return (
      <View style={styles.container}
      behavior = "padding"
      >
        <View style={styles.rectangleOverlay}>
          <Image source={spongebob} 
                  style={[styles.spongebob, {height: height * 0.3}]} 
                  resizeMode="contain"/>
          <TouchableOpacity 
          onPress={() => {firebase.auth().signOut()}}
          style={styles.signoutButton}>
            <Text style={styles.signoutText}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default HomeScreen

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
  spongebob: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    marginVertical: '5%',
  },
  signoutButton: {
    marginTop: "30%",
    height: 50,
    width: 200,
    backgroundColor: '#28b4ee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  signoutText: {
    fontWeight: 'regular',
    fontSize: 22,
    color: '#fff',
  },  
  
})