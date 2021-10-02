
import React from 'react';
import { View,Text,StyleSheet,StatusBar } from 'react-native';
import Add from '../assets/svg/add';


class FabCreate extends React.Component{
  render(){
    return(
      <View style={styles.fabContainer}>
        <Add
          color={'white'}
          opacity={0.97}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  fabContainer:{
    justifyContent:'center',
    alignItems:'center',
    width:60,
    height:60,
    backgroundColor:'rgba(0,0,0,0.8)',
    position:'absolute',
    bottom:0,
    right:27,
    marginBottom:20,
    borderRadius:100,
  }
})




export default FabCreate



