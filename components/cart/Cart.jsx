import { ConfirmCart, RemoveItem } from '../../store/actions/cart.action'
import {FlatList, Text, View}from 'react-native'

import  CartItem  from '../cartItem/cartItem'
import React from 'react'
import {useSelector} from 'react-redux'

const Cart = () => {
const cartItems = useSelector(state => state.cart.items)
const cartTotal = useSelector(state => state.cart.total)
const cartItemRender = ({item}) => {
  return <CartItem RemoveItem={RemoveItem} item={item} confirm={ConfirmCart}/>
} 
  return (
    <View>
      <Text>Total: {cartTotal.toFixed(2)}</Text>
      <FlatList data={cartItems} renderItem={cartItemRender}/>
    </View>
  
    )
}

export default Cart