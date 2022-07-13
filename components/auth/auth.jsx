import { Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { signIn, signUp } from '../../store/actions/auth.actions'

import { colors } from '../../colors'
import { styles } from './styles'
import {useDispatch} from 'react-redux'

const Auth = () => {
  const dispatch = useDispatch()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [isLogin , setisLogin] = useState(true)
  const title = isLogin ?'Login' : 'Registro'
  const message=  isLogin ? '¿No tienes una cuenta?':'¿Ya tienes una cuenta?'
  const messageAction = isLogin ?'Registrarse':'Iniciar sesion'
  const messageTarget = isLogin ?'Login' : 'Register'
  const handlerSubmit = () => {
    dispatch(isLogin ? signIn (email,password): signUp(email,password))
  }
  
  const onChangeText = (text, type) => {
    if (type === 'email'){
      setEmail(text)
    }else{
      setPassword(text)
    }
  }
  const onChangeAuth = () => {
    setisLogin(!isLogin)
    setEmail('')
    setPassword('')
  }
  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior='height'>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.label}> Email</Text>
          <TextInput
          style={styles.input}
          placeholder='Email Adrress'
          placeholderTextColor={colors.blue}
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          value={email}
          onChangeText={(text) => onChangeText(text, 'email') }
          />
          <Text>Password</Text>
          <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor={colors.blue}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText = { (text) => onChangeText(text, 'password')}
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