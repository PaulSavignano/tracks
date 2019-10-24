import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

function SignupScreen({ navigation }) {
  return (
    <>
      <Text style={styles.text}>
        SignupScreen
      </Text>
      <Button
        onPress={() => navigation.navigate('Signin')}
        title="Go to Signin"
      />
      <Button
        onPress={() => navigation.navigate('mainFlow')}
        title="Go to mainFlow"
      />
    </>
  )
}

SignupScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired
}

export default SignupScreen