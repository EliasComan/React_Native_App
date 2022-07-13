import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Ionicons } from '@expo/vector-icons'
import { deleteOrder } from '../../store/actions/orders.actions'
import { getOrders } from '../../store/actions/orders.actions'
import {styles} from './orders.styles'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'

const Orders = () => {
    const dispatch = useDispatch()
    const orders = useSelector( state =>state.orders.orders)
    useEffect(()=>{
        dispatch(getOrders())

    },[orders])
    const ondeleteOrder =(id) => {
        dispatch(deleteOrder(id))
    }
    const renderItem = (item) => {
         return  ( 
            <TouchableOpacity style={styles.containerItem}>
                <View>
                    <Text style={styles.title}>{item.item.date}</Text>
                    <Text>ID:  {item.item.id}</Text>
                </View>
                <View>
                    <Text style={styles.title}>{item.item.total}</Text>
                    <Text>{item.item.date}</Text>
                </View>
                <TouchableOpacity onPress={()=> ondeleteOrder(item.item.id)}>

                <Ionicons name="trash" size={24} color="black" />
                </TouchableOpacity>
            </TouchableOpacity>
    )}
    return (
    <View style={styles.container}>
       <FlatList data={orders} renderItem={renderItem}/>
    </View>
  )
}

export default Orders