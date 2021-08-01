

import { StyleSheet,Text,View,Pressable } from 'react-native';
import React from 'react';
import AdFile from '../assets/svg/adFile'


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
          <View style={styles.boxContainer}>
            <AdFile/>
            <Text style={{ color:'rgba(0,0,0,0.5)',marginLeft:15 }}>Añadir comentario</Text>
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
  boxContainer:{
    alignItems:'center',
    alignContent:'center',
    flexDirection:'row',
    width:'100%',
    paddingLeft:10,
    paddingRight:10,
    height:'70%',
    backgroundColor:'#F7F8FA',
    height:45,
    borderRadius:100
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
