import { Button, FlatList, Text, TextInput, View } from 'react-native';
import  React,{ useEffect, useState } from 'react'

import { ConsultaFectch } from './components/consultaFetch/ConsultaFectch.js';
import { StatusBar } from 'expo-status-bar';

function ComponentComun( {  style  }) {
  return(

      <View style={{marginTop:40}}>
          <StatusBar style="auto" />
          <ConsultaFectch style = {style}/>
      </View>
    )
}

export default ComponentComun