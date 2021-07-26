

import { StyleSheet,TextInput,Text,View,Pressable } from 'react-native';
import React from 'react';


export default class BottomCreate extends React.Component{

  constructor(props){
    super(props)
  }

  onCreateSubThread = () => {
    this.props.navigation.navigate({
      name:'create',
      key:Math.random(),
      params:{
        response:true,
        id:this.props.id
      }
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Pressable
          style={{ flex:1,flexDirection:'row' }}
          onPress={this.onCreateSubThread}
        >
          <Text style={styles.file}>Files</Text>
          <View style={styles.text}>
            <Text style={{ color:'rgba(0,0,0,0.5)' }}>Responde este hilo</Text>
          </View>

        </Pressable>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  file:{
    backgroundColor:'yellow',
  },
  send:{
    backgroundColor:'green',
  },
  text:{
    justifyContent:'center',
    width:'90%',
    paddingLeft:10,
    paddingRight:10,
    height:'70%',
    opacity:0.9,
    backgroundColor:'rgba(0,0,0,0.04)',
    height:45,
    borderRadius:10,
    borderColor:'rgba(0,0,0,0.07)',
    borderWidth:1,
  },
  container:{
    bottom:0,
    width:'100%',
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:10,
    paddingTop:10,
  }
})
