import {Button, Image, Text, View} from 'react-native'

import { AddtoCart } from '../../store/actions/cart.action'
import React from 'react'
import { useDispatch } from 'react-redux'

const ItemDetail = ({route}) => {
  const {item} = route.params
  const dispatch = useDispatch()
  return (
    <View>
      <View>
        <Image style={{width:200,height:200}} source={{uri:item.thumbnail}}/>
        <Text>{item.title}</Text>
      </View>
        <Button title='Add to cart'  onPress={() => dispatch(AddtoCart(item))}/>
    </View>
  )
}

export default ItemDetail