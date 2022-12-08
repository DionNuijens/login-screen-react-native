import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({})