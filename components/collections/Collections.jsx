import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { selectedCollection } from '../../store/actions/collections.actions'
import { styles } from './collections.Styles'

export const ListContainer = ({ navigation }) => {
  const collections = useSelector(state  => state.collections.collections)
  const dispatch = useDispatch()
  
 function setItems({ item }) {
  return (
      <View  key={item.id} >
        <TouchableOpacity style={styles.taskContainer}
           onPress={()=>
            dispatch(
              selectedCollection(item.id),
              navigation.navigate('Collection',{categoryID:item.id}
            )
            
            )}>
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
        <FlatList data={collections}  renderItem={setItems} />
    </View>
      
  )
}
