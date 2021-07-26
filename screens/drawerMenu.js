

import React from 'react';
import { Text,View,Pressable,StyleSheet, } from 'react-native';


class DrawerMenu extends React.Component{
  render(){

    var renderItems = null
    const listItems = [{
        title:'Configuraciones',
        page:'settings',
        icon:'config'
      },{
        title:'Guardado',
        page:'settings',
        icon:'config'
      },{
        title:'Temas',
        page:'settings',
        icon:'config'
      },{
        title:'Atuda',
        page:'settings',
        icon:'config'
      },{
        title:'Reglas',
        page:'settings',
        icon:'config'
      },{
        title:'Novedades',
        page:'settings',
        icon:'config'
      }
    ]

    renderItems = listItems.map((i,x) => {return (null)})
    return(<View style={styles.container}></View>)
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F7F8FA',
    paddingTop:35,
    paddingRight:10
  },
  drawItem:{
    padding:25
  },
  drawerContainer:{
      width:'100%',
      height:'100%',
      backgroundColor:'#F5F5F8',
      borderTopRightRadius:10,
      borderTopLeftRadius:10
  }
})


export default DrawerMenu