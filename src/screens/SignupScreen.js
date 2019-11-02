import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { NavigationEvents } from 'react-navigation'
import { View, StyleSheet } from 'react-native'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
})

function SignupScreen() {
  const { state, onSignup, onDeleteError } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={onDeleteError} />
      <AuthForm
        error={state.error}
        headerText="Sign Up"
        onSubmit={onSignup}
        submitButtonText="Sign Up"
        isFetching={state.isFetching}
      />
      <NavLink route="Signin">
        Already have an account?  Sign in instead.
      </NavLink>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
}

SignupScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired
}

export default SignupScreen