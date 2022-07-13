import { Button, Image, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { styles } from '../collectionItem/collectionItem.Styles'
import { useDispatch } from 'react-redux'

const CartItem = ({item, RemoveItem}) => {
    const dispatch =useDispatch()
  return (
            <TouchableOpacity >
                <View style={styles.container}>
                <View>
                    <Image  style={styles.image}source={{uri:item.thumbnail}}/>
                </View>
                <View style={styles.cards}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.numbers}>{item.price} USD</Text>
                    <Text>Cantidad: {item.quantity}</Text>
                <Button title='Delete'  onPress={() =>dispatch(RemoveItem(item.id))}/>
                </View>
                <View>
                </View>
                
            </View>
        </TouchableOpacity>
  )
}

export default CartItem