import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

import { withNavigation } from 'react-navigation'
import Spacer from './Spacer'

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
})

function NavLink({ navigation, children, route }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(route)}>
      <Spacer>
        <Text style={styles.link}>{children}</Text>
      </Spacer>
    </TouchableOpacity>
  )
}


NavLink.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired
}

export default withNavigation(NavLink)