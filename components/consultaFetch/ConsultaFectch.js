import { Button, FlatList, Image, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'

export const ConsultaFectch = ({style}) => {
    const [dataBase, setDataBase] = useState([])
    
    function setItems ({item})  {
       return(  
          <View  style={style.taskContainer} key={item.id}>
            <View >
                <Image  style={style.Image} source={{uri:`${item.image}`}} />
            </View>
            <View>
                <Text>{item.current_price}</Text>
                <Text style={
                  item.price_change_percentage_24h> 1? {backgroundColor:'green'} : {backgroundColor:'red'}
                  }>
                  {item.price_change_percentage_24h}</Text>
            </View>
            <Button title='Eliminar' onPress={ () => {deleteItem(item.id)}} />
          </View>
    )}
    
    function deleteItem(itemId) {
     const filterItems = dataBase.filter(item => (item.id != itemId))
      setDataBase(filterItems)
    }
    const getCriptosFromDatabase = async () => {
        try {
          const response = await fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
          );
          const json = await response.json();
          setDataBase(json)
         
        } catch (error) {
          console.error(error);
        }
      };
 
   useEffect(() => {
    getCriptosFromDatabase()
   },[])
    return (
        <View>
          <FlatList 
          data={dataBase}
          renderItem={setItems}
         
         />
            {
               /* dataBase &&
                dataBase.map( (cripto,index ) => (
                    <View key={cripto.id+index}>
                        <View>
                            <Image source={cripto.image} />
                        </View>
                        <View>
                            <Text>{cripto.current_price}</Text>
                            <Text>{cripto.price_change_percentage_24h}</Text>
                        </View>
                        <Text></Text>
                    </View>

                ))
            */
            }
           
                
        </View>
        )
}
