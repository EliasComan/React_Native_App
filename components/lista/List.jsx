import { ListContainer } from '../listContainer/ListContainer';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'

function List( ) {
  return(

      <View style={{marginTop:40}} >
          <StatusBar style="auto" />
          <ListContainer />
      </View>
    )
}

export default List