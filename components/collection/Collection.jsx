import { FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import CollectionItem from '../collectionItem/collectionItem'
import { filteredProducts } from '../../store/actions/products.actions'

const Collection = ({navigation}) => {
    const dispatch = useDispatch()
    const selectedcategory = useSelector(state => state.collections.selected.id)
    const data = useSelector(state => state.products.filter)
    useEffect( ()=> {
        dispatch(filteredProducts(selectedcategory))
    },[])
    
    const collectionItem = ({item})=>{
    return <CollectionItem item={item} navigation={navigation}/>
    }
    return (
    <View>
        <FlatList data={data} renderItem={collectionItem}/>
    </View>
  )
}

export default Collection