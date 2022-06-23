import { ListContainer } from '../collections/Collections';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'

function List( {navigation } ) {
  return(

      <View  >
          <StatusBar style="auto" />
          <ListContainer navigation={navigation} />
      </View>
    )
}

export default List