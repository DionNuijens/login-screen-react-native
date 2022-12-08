import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, useWindowDimensions,  } from 'react-native'
import React, { useState, useEffect } from 'react'
import spongebob from '../assets/spongebob.jpg'
import { firebase } from '../config'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons';


import ProfileScreen from "./appScreens/ProfileScreen.js"
import SettingsScreen from "./appScreens/SettingsScreen.js"


const HomeScreen = () => {

  const {height} = useWindowDimensions()
  const Tab = createBottomTabNavigator();

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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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