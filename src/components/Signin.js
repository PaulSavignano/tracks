import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Form } from 'savignano-form'

import Field from './Field'
import SubmitButton from './SubmitButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
})

function handleSubmit(values) {
  console.log('handleSubmit', values)
}

function Signin(props) {
  console.log('Signin ', props)
  return (
    <Form component={View} style={styles.container}>
      <Field
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        name="email"
        placeholder="Email"
        type="text"
      />
      <Field
        autoCapitalize="none"
        autoCorrect={false}
        label="Password"
        name="password"
        placeholder="Password"
        secureTextEntry
        type="text"
      />
      <SubmitButton
        onPress={handleSubmit}
        type="button"
        title="Sign In"
      />
    </Form>
  )
}

export default Signin