import React from 'react'
import { Input } from 'react-native-elements'

import Spacer from './Spacer'

function InputField(props) {
  const { onChange, error, value, label, onBlur, isTouched, ...rest } = props
  console.log('InputField', props.name, isTouched)
  return (
    <Spacer>
      <Input
        {...rest}
        label={value ? label : null}
        errorMessage={error}
        value={value}
        onChangeText={v => {
          console.log('v is ', v)
          return onChange({ target: { name: props.name, value: v } })
        }}
      />
    </Spacer>

  )
}

export default InputField