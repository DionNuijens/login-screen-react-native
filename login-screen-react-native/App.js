import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect} from "react";
import { firebase } from "./config.js"

import LoginScreen from "./src/LoginScreen.js";
import SignUpScreen from "./src/SignUpScreen.js";
import HomeScreen from "./src/HomeScreen.js";
// import Header from "./components/Header.js";
import { NativeAppEventEmitter } from "react-native";
import { applyActionCode } from "firebase/auth";

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
          options={{ headerShown: false}}
          // options = {{
          //   headerTitle: () => <Header name = "Klarity"/>,
          //   headerStyle: {
          //     height: 150,
          //     borderBottomLeftRadius:50,
          //     borderBottomRightRadius:50,
          //     backgroundColor: '#c228ee',
          //     shadowColor: '#000',
          //     elevation: 15,
          //   }
          // }}
        />
        <Stack.Screen
          name = 'Sign Up' 
          component={SignUpScreen}
          options={{ headerShown: false}}
          // options = {{
          //   headerTitle: () => <Header name = "Klarity"/>,
          //   headerStyle: {
          //     height: 150,
          //     borderBottomLeftRadius:50,
          //     borderBottomRightRadius:50,
          //     backgroundColor: '#c228ee',
          //     shadowColor: '#000',
          //     elevation: 25,
          //   }
          // }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
          name = 'Home' 
          component={HomeScreen}
          options={{ headerShown: false}}
          // options = {{
          //   headerTitle: () => <Header name = "Home"/>,
          //   headerStyle: {
          //     height: 150,
          //     borderBottomLeftRadius:50,
          //     borderBottomRightRadius:50,
          //     backgroundColor: '#c228ee',
          //     shadowColor: '#000',
          //     elevation: 25,
          //   }
          // }}
        />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}



