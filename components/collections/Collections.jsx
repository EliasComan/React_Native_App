import { Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Collections } from '../../database/collections'
import { styles } from './collectionsStyles'

export const ListContainer = ({ navigation }) => {
  const [dataBase, setDataBase] = useState(Collections)
  
 function setItems({ item }) {
    return (
      <View  key={item.id} >
        <TouchableOpacity style={styles.taskContainer} onPress={()=> navigation.navigate('Collection',{categoryID:item.id})}>
            <Image style={styles.Image} source={{ uri: item.miniatura }} />
           <View style={styles.container}>
            <Image style={styles.Miniatura} source={{uri:item.portada}}/>
            <Text style={styles.text}>{item.name}</Text>
           </View>
        </TouchableOpacity>
      </View>
    )
  }

  
  return (
    <View styles={styles.views}>
        <FlatList data={dataBase}  renderItem={setItems} />
    </View>
      
  )
}
