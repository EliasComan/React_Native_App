import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native'

import Label from '../label/label'
import React from 'react'
import { styles } from './styles'

const Input = (
    {
    editable, 
    children, 
    value, 
    onChangeText, 
    keyboardType,
    onFocus, 
    maxLength, 
    placeholder,
    placeholderTextColor,
    onBlur,
    hasError,
    error,
    touched,
    ...props
}) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Label >
            <TextInput
            {...props} 
            style={styles.input}
            editable={!editable}
            onFocus={onFocus}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onBlur={onBlur}
            maxLength={maxLength}
            value={value}
            keyboardType={keyboardType}
            />
        </Label>
        {hasError && touched &&(
          <View style={styles.message}>
            <Text style={styles.helper}>{error}</Text>
        </View>)}
    </KeyboardAvoidingView>
  )
}

export default Input