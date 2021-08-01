

import React from 'react';
import { Text,View,Pressable,StyleSheet, } from 'react-native';


class DrawerMenu extends React.Component {

  constructor(props){
    super(props)
  }
  

  render(){
    var renderItems = null
    const listItems = [{
        title:'Mis actividad',
        page:'MyThreads',
        icon:''
      },{
        title:'Guardado',
        page:'SaveThread',
        icon:'config'
      }
    ]

    renderItems = listItems.map((i,x) =>(
      <Pressable
        style={{ backgroundColor:'red' }}
        key={x}
        onPress={() => {
          this.props.navigation.navigate(i.page)
        }}
      >
        <View>
          <Text>{i.title}</Text>
        </View>
      </Pressable>
    ))

    return(
      <View style={styles.container}>
        {renderItems}
      </View>
    )
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