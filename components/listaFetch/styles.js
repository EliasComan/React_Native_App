import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight:'bold',
      fontSize:22,
    },
    taskContainer:{
      flex:1,
      marginTop:12,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginVertical:25,
      marginHorizontal:20
    },
    list:{
      fontSize:14,
      fontWeight:'bold',
      alignItems:'center',
    },
    text:{
      fontSize:18,
      fontWeight:'bold'
    },
    textNumber:{
      fontSize:18,
      maxWidth:50,
      fontWeight:'bold'
    },
    Image:{
      width: 66,
      height: 58,
      
    },
    textGrenn:{ 
      backgroundColor: 'green',
      fontSize:18,maxWidth:80,
      fontWeight:'bold' 
  },
  textRed:{
     backgroundColor: 'red',
     fontSize:18,maxWidth:80,
     fontWeight:'bold' 
  }
  });