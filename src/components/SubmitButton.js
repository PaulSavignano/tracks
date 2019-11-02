import React from 'react'
import { Button } from 'react-native-elements'
import * as form from 'savignano-form'

function SubmitButton({ onPress, title }) {
  console.log('form is ', form)

  return (
    <Button
      onPress={() => console.log('pressed')}
      title={title}
    />
  )
}

export default SubmitButton