import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

function AccountScreen() {
  return (
    <Text style={styles.text}>
      AccountScreen
    </Text>
  )
}

AccountScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired
}

export default AccountScreen