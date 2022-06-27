import Cart from '../cart/Cart';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const CartNavigation = () => {
  return (
        <Stack.Navigator initialRouteName='Cart'>
            <Stack.Screen name='Cart' component={Cart}/>
        </Stack.Navigator>

  )
}

export default CartNavigation