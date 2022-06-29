import { FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import collectionItem from '../collectionItem/collectionItem'
import { filteredProducts } from '../../store/actions/products.actions'

const Collection = () => {
    const dispatch = useDispatch()
    const selectedcategory = useSelector(state => state.collections.selected.id)
    const [ productsfiltered, setProductsfiltered ] = useState([])
    const data = useSelector(state => state.products.filter)
    
    useEffect( ()=> {
        dispatch(filteredProducts(selectedcategory))
        setProductsfiltered(data)
    },[])

  return (
    <View>
        <FlatList data={productsfiltered} renderItem={collectionItem}/>
    </View>
  )
}

export default Collection