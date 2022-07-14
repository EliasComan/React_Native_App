import { Button, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import React,{useReducer, useState} from 'react'
import { UPDATED_FORM, onFocusOut, onInputChange } from '../../utils/forms'
import { signIn, signUp } from '../../store/actions/auth.actions'

import Input from '../input/input'
import { colors } from '../../colors'
import { styles } from './styles'
import {useDispatch} from 'react-redux'

const initialState = {
  email: { value: "", touched: false, hasError: true, error: "" },
  password: { value: "", touched: false, hasError: true, error: "" },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
      };
    default:
      return state;
  }
};
const Auth = () => {
  const dispatch = useDispatch()
  const [formState, dispatchForm] = useReducer(formReducer, initialState)
  const [isLogin , setisLogin] = useState(true)
  //const formState={email:{value:''}, password:{value:''}}
  const title = isLogin ?'Login' : 'Registro'
  const message=  isLogin ? '¿No tienes una cuenta?':'¿Ya tienes una cuenta?'
  const messageAction = isLogin ?'Registrarse':'Iniciar sesion'
  const messageTarget = isLogin ?'Login' : 'Register'
  const handlerSubmit = () => {
    dispatch(isLogin ? signIn (formState.email.value,formState.password.value): signUp(formState.email.value,formState.password.value))
  }
 const onChangeText = (text, type) => {
    onInputChange(type,text, dispatchForm, formState)
  }
  const onChangeAuth = () => {
    setisLogin(!isLogin)
  }
  const onBlurInput = (text, type) => {
    console.log(text);
    onFocusOut(type, text, dispatchForm, formState);
  };
  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior='height'>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.label}> Email</Text>
          <Input
          style={styles.input}
          placeholder='Email Adrress'
          placeholderTextColor={colors.blue}
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          value={formState.email.value && formState.email.value}
          onChangeText={(text) => onChangeText(text, 'email') }
          onBlur={(text) => onBlurInput(text.nativeEvent.text, "email")}
          hasError={formState.email.hasError}
          error={formState.email.error}
          touched={formState.email.touched}
          />
          <Text>Password</Text>
          <Input
          style={styles.input}
          placeholder='Password'
          placeholderTextColor={colors.blue}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry
          value={formState.password.value && formState.password.value}
          onChangeText = { (text) => onChangeText(text, 'password')}
          onBlur={(text) => onBlurInput(text.nativeEvent.text, "password")}
          hasError = {formState.password.hasError}
          touched={formState.password.touched}
          error={formState.password.error}
          />
          <Button color={colors.darkBlue} title={messageTarget} onPress={()=>handlerSubmit()}/>
        </View>
        <View style={styles.prompt}>
            <Text style={styles.promptMessage}>{message}</Text>
            <TouchableOpacity onPress={() =>onChangeAuth()}>
                <Text style={styles.propmtButton}>{messageAction}</Text>
            </TouchableOpacity>

        </View>
    </KeyboardAvoidingView>
    
  )
}

export default Auth