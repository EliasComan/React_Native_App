import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight:'bold',
      fontSize:22,
      backgroundColor:'#ffffff',
    },
    taskContainer:{
      borderRadius:30,
      flex:1,
      marginTop:40,
      marginHorizontal:15,
      display: "flex",
      flexDirection:'row',
      borderRadius:20
    },
    text:{
      fontSize:18,
      fontWeight:'bold'
    },
    Image:{
      width: 100,
      height: 90,
      
    },
    Miniatura:{
      width: 35,
      height: 35,
      borderRadius:999
    },
    number:{
        fontSize:14,
        fontWeight:'semibold'
    },
  });