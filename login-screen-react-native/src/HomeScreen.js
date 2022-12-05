import { StyleSheet, Text, View, SafeAreaView, Image, useWindowDimensions  } from 'react-native'
import React from 'react'
import spongebob from '../assets/spongebob.jpg'


const HomeScreen = () => {
  const {height} = useWindowDimensions()

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