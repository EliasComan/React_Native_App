import Auth from "../auth/auth";
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator()
const AuthNavigation = () => {
  return (
    <stack.Navigator initialRouteName="Auth" screenOptions={{headerShow:false}}>
        <stack.Screen options={{title:'Log in'}} name='Auth' component={Auth}/>
    </stack.Navigator>

  )
}

export default AuthNavigation