import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, useWindowDimensions  } from 'react-native'
import React, { useState, useEffect } from 'react'
import spongebob from '../assets/spongebob.jpg'
import { firebase } from '../config'


const HomeScreen = () => {

  const [userName, setUserName] = useState('')
  const {height} = useWindowDimensions()

  useEffect(() => {
    
  })

  return (
    <SafeAreaView>
      <Image source={spongebob} 
               style={[styles.spongebob, {height: height * 0.3}]} 
               resizeMode="contain"/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  spongebob: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})