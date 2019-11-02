import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'

import Map from '../components/Map'

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

function TrackCreateScreen() {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.text}>
        TrackCreateScreen
      </Text>
      <Map />
    </SafeAreaView>

  )
}

TrackCreateScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired
}

export default TrackCreateScreen