import { Button, FlatList, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { getCriptosFromDatabase } from '../listaFetch/listaFetch'
import { styles } from '../listaFetch/styles'

export const ListContainer = () => {
  const [dataBase, setDataBase] = useState([])

  function deleteItem(itemId) {
    const filterItems = dataBase.filter((item) => item.id != itemId)
    setDataBase(filterItems)
  }
  
 function setItems({ item }) {
    return (
      <View style={styles.taskContainer} key={item.id}>
        <View>
          <Image style={styles.Image} source={{ uri: item.image }} />
        </View>
        <View style={styles.list}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>Price: {item.current_price}</Text>
          <Text> Last24h:  
            <Text
                style={
                  item.price_change_percentage_24h > 1 ? 
                  styles.textGrenn
                    :
                    styles.textRed
                }
              >
               {item.price_change_percentage_24h}%
              </Text>
          </Text>
        </View>
        <Button
          title="Eliminar"
          onPress={() => {
            deleteItem(item.id)
          }}
        />
      </View>
    )
  }

  useEffect(() => {
    getCriptosFromDatabase(setDataBase)
  }, [])

  
  return (
    <View>
      <FlatList data={dataBase}  renderItem={setItems} />
    </View>
  )
}
