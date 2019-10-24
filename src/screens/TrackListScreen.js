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

function TrackListScreen({ navigation }) {
  return (
    <>
      <Text style={styles.text}>
        TrackListScreen
      </Text>
      <Button
        onPress={() => navigation.navigate('TrackDetail')}
        title="Go to TrackDetail"
      />
    </>
  )
}

TrackListScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired
}

export default TrackListScreen