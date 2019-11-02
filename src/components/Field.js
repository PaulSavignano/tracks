import React, { useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { useFormField } from 'savignano-form'
import { Input } from 'react-native-elements'

const styles = StyleSheet.create({
  input: {
    margin: 4
  }
})

function Field({
  autoCapitalize,
  autoCorrect,
  label,
  name,
  placeholder,
  type,
}) {
  const ctx = useFormField({
    name,
    type
  })
  const {
    error,
    isTouched,
    onBlur,
    value,
  } = ctx
  const onChange = useCallback(ctx.onChange, [name])
  console.log('Field', ctx)
  return (
    <Input
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      errorMessage={error}
      name={name}
      placeholder={placeholder}
      style={styles.input}
      type={type}
      value="test"
      onChangeText={v => {
        console.log('v is ', v)

        onChange({ target: { name, value: v } })
      }}
    />
  )
}

export default Field