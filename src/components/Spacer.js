import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
})

function Spacer({ children }) {
  return (
    <View style={styles.spacer}>
      {children}
    </View>
  )
}

Spacer.propTypes = {
  children: PropTypes.node.isRequired
}

export default Spacer