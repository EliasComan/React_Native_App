import { FlatList, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import {products} from '../../database/products'
import { styles } from './collection.Styles'

const Collection = ({route}) => {
    const {categoryID} = route.params
    const [productsfiltered, setProductsfiltered] = useState([])

    useEffect( ()=> {
        const producsFilter = products.filter(item =>item.categoryID === categoryID)
        setProductsfiltered(producsFilter)
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