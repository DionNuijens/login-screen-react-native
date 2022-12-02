import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect} from "react";
import { firebase } from "./firebase/firebase-config.js"

import LoginScreen from "./src/LoginScreen.js";
import SignUpScreen from "./src/SignUpScreen.js";
import HomeScreen from "./src/HomeScreen.js";
import Header from "./components/Header.js";
import { NativeAppEventEmitter } from "react-native";

const Stack = createNativeStackNavigator();

function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if(initializing) setInitializing(false);
  }
  useEffect(() =>  {
    const user = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return user;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name = 'Login' 
          component={LoginScreen}
          options = {{
            headerTitle: () => <Header name = "Klarity"/>,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius:50,
              borderBottomRightRadius:50,
              backgroundColor

              // 12:40
            }
          }}
        
      />
      </Stack.Navigator>
    )
  }
}

