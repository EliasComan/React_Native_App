import Collection from '../collection/Collection';
import List from '../lista/List';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='All collections' component={List}/>
            <Stack.Screen name='Collection' component={Collection} />
        </Stack.Navigator>

  )
}

export default HomeNavigation