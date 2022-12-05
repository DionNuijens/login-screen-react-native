import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLinkProps } from '@react-navigation/native'

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textname}>
        {props.name}
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    textname: {
        fontWeight:'regular',
        fontSize: 28,
        color: '#fff',
        
    },
})