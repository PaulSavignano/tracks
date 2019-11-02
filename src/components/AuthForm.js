import React, { useState } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'

import Spacer from "./Spacer"

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    color: 'red',
  },
})

function AuthForm({
  headerText,
  error,
  onSubmit,
  submitButtonText,
  isFetching,
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log('AuthForm error ', error)
  console.log('check react', navigator)
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          label={email ? 'Email' : null}
          name="email"
          onChangeText={e => {
            // console.log('onChangeText is ', e)

            setEmail(e)
          }}
          onChange={e => {
            console.log('onChange is ', e)
          }}
          value={email}
          errorMessage={error}
        />
      </Spacer>
      <Spacer>
        <Input
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          label={password ? 'Password' : null}
          onChangeText={setPassword}
          secureTextEntry
          value={password}
          errorMessage={error}
        />
      </Spacer>
      <Spacer>
        <Button
          onPress={() => onSubmit({ email, password })}
          loading={isFetching}
          title={submitButtonText}
        />
      </Spacer>
    </>
  )
}

export default AuthForm