import {FlatList, View}from 'react-native'

import React from 'react'
import { cartDB } from '../../database/cart.db'
import collectionItem from '../collectionItem/collectionItem'

const Cart = () => {
  return (
    <View>
      
      <FlatList data={cartDB} renderItem={collectionItem}/>
    </View>
  
    )
}

export default Cart