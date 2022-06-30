import Collection from '../collection/Collection';
import ItemDetail from '../itemDetail/itemDetail';
import List from '../lista/List';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='All collections' component={List}/>
            <Stack.Screen name='Collection' component={Collection} />
            <Stack.Screen name = 'ItemDetail' component={ItemDetail}/>
        </Stack.Navigator>

  )
}

export default HomeNavigation