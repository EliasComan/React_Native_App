import { ListContainer } from '../listContainer/listContainer';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'

function Lista( ) {
  return(

      <View style={{marginTop:40}}>
          <StatusBar style="auto" />
          <ListContainer />
      </View>
    )
}

export default Lista