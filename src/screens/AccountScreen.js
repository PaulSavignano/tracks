import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

function AccountScreen() {
  const { state, onSignout } = useContext(AuthContext)
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.text}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={onSignout} />
      </Spacer>
    </SafeAreaView>
  )
}

AccountScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired
}

export default AccountScreen