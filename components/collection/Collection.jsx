import { FlatList, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { filteredProducts } from '../../store/actions/products.actions'
import { styles } from './collection.Styles'

const Collection = () => {
    const dispatch = useDispatch()
    const selectedcategory = useSelector(state => state.collections.selected.id)
    const [ productsfiltered, setProductsfiltered ] = useState([])
    const data = useSelector(state => state.products.filter)
    
    useEffect( ()=> {
        dispatch(filteredProducts(selectedcategory))
        setProductsfiltered(data)
    },[])

    const setProducts = ({item}) => {
        return(
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
  return (
    <View>
        <FlatList data={productsfiltered} renderItem={setProducts}/>
    </View>
  )
}

export default Collection