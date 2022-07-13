import { Button, Image, Text, TouchableOpacity, View } from 'react-native'

import { AddtoCart } from '../../store/actions/cart.action'
import React from 'react'
import { styles } from './collectionItem.Styles'
import { useDispatch } from 'react-redux'

const CollectionItem = ({item, navigation}) => {
  const dispatch = useDispatch()
 
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('ItemDetail', {item:item})}>
        <View style={styles.container}>
        <View>
            <Image  style={styles.image}source={{uri:item.thumbnail}}/>
        </View>
        <View style={styles.cards}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.numbers}>{item.price} USD</Text>
        </View>
        <View>
        </View>
        
      </View>
</TouchableOpacity>
  )
}

export default CollectionItem