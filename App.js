import ComponentComun from './Component.comun';
import { StyleSheet } from 'react-native';

export default function App() {
  const styles = StyleSheet.create({
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
      marginVertical:50,
      marginVertical:25
    },
    list:{
      fontSize:14,
      fontWeight:'bold',
      alignItems:'center',
      justifyContent:'flex-start',
    },
    text:{
      fontSize:24,
      fontWeight:'bold'
    },
    Image:{
      width: 66,
      height: 58,
    }
  });
  return (
    <ComponentComun style={styles} />

  );
}

