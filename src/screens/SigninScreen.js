import React, { useContext, useEffect } from 'react'
import { NavigationEvents } from 'react-navigation'
import PropTypes from 'prop-types'
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

function SigninScreen() {
  const { state, onSignin, onDeleteError } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={onDeleteError} />
      <AuthForm
        error={state.error}
        headerText="Sign In"
        onSubmit={onSignin}
        submitButtonText="Sign In"
        isFetching={state.isFetching}
      />
      <NavLink route="Signup">
        New?  Sign up instead.
      </NavLink>
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    header: null
  }
}

SigninScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired
}

export default SigninScreen