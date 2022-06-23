import { Button, FlatList, View } from 'react-native'

import React from 'react'

const DeletedItems = ({ dataBase, setItems, navigation}) => {
  return (
    <View>
    <Button  title='Go to All' onPress={()=>  {navigation.navigate('All')}}/>
    <FlatList data={dataBase}  renderItem={setItems} />
  </View>
  )
}

export default DeletedItems