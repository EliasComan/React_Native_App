import { Button, FlatList, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { getCriptosFromDatabase } from '../listaFetch/ListaFetch'
import { styles } from '../listaFetch/styles'

export const ListContainer = () => {
  const [dataBase, setDataBase] = useState([])
  const [deletedItems, setdeletedItems] = useState([])
  const [viewDeleted, setViewDeleted] = useState(false)


  function handleDeletedItems(itemDeleted) {
  
  setdeletedItems([...deletedItems, itemDeleted])
  }
  function deleteItem(itemId) {
    const filterItems = dataBase.filter((item) => item.id != itemId)
    const itemDeleted = dataBase.filter(item => item.id === itemId )
    handleDeletedItems(itemDeleted[0])
    
    setDataBase(filterItems)
    
    
  }
  function handleViews() {
    setViewDeleted(!viewDeleted)
    
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
    <View>{

      viewDeleted? 
      <View>
        <Button title='View all'  onPress={handleViews}/>
            <FlatList data={deletedItems}  renderItem={setItems} />
      </View>
      :
      <View>
        <Button title='View deleted' onPress={ handleViews} />
        <FlatList data={dataBase}  renderItem={setItems} />
      </View>
    }
    </View>
  )
}
