import { StyleSheet } from "react-native"

export  const styles = StyleSheet.create ({
  title:{
    fontSize:18,
    fontWeight:'bold'
  },
  image:{
    width: 100,
    height: 100,
    borderRadius:18
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:20,
    marginVertical:20,
    backgroundColor:'#d9d9d9',
    borderRadius:26
  },
  cards:{
    flexDirection:'column',
    alignItems:'center',
    marginHorizontal:40
  },
  numbers:{
    fontSize:18,
    fontWeight:'800'
  }
}) 

