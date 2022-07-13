import {Button, FlatList, Text, View}from 'react-native'
import { ConfirmCart, RemoveItem } from '../../store/actions/cart.action'

import  CartItem  from '../cartItem/cartItem'
import React from 'react'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'

const Cart = () => {
  const dispatch = useDispatch()
const cartItems = useSelector(state => state.cart.items)
const cartTotal = useSelector(state => state.cart.total)
const cartItemRender = ({item}) => {
  return <CartItem RemoveItem={RemoveItem} item={item} />
} 
  return (
    <View>
      <View>
        <Text>Total: {cartTotal.toFixed(2)}</Text>
        <Button title='Confirm' onPress={()=>dispatch(ConfirmCart(cartItems, cartTotal))}/>
      </View>
      <FlatList data={cartItems} renderItem={cartItemRender}/>
    </View>
  
    )
}

export default Cart