import { Image, Text, View } from 'react-native'

import React from 'react'
import { styles } from './collectionItem.Styles'

const collectionItem = ({item}) => {
  return (
    <View style={styles.container}>
    <View>
        <Image  style={styles.image}source={{uri:item.thumbnail}}/>
    </View>
    <View style={styles.cards}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.numbers}>{item.price} USD</Text>
    </View>
    
</View>
  )
}

export default collectionItem