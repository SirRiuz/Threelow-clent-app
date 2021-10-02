

import React from 'react';
import * as Font from 'expo-font';
import { Text,View,Pressable,StyleSheet, } from 'react-native';
import Save from '../assets/svg/save'
import MyActions from '../assets/svg/actions'
import Reglas from '../assets/svg/reglas'
import Buzon from '../assets/svg/buzon'


class DrawerMenu extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLoadFont:false
    }
  }

  async loadFont () {
    await Font.loadAsync({
      'Cerebri-Sans-Book':require('../assets/fonts/Cerebri-Sans-Book.ttf')
    })
    this.setState({isLoadFont:true})
  }

  componentDidMount() {
    this.loadFont()
  }


  render(){
    if(!this.state.isLoadFont){
      return null
    }

    var renderItems = null
    const listItems = [{
        title:'Guardado',
        subTitle:'Hilos guardados',
        page:'SaveThread',
        icon:<Save/>
      },{
        title:'Mi actividad',
        subTitle:'Tus hilos',
        page:'MyThreads',
        icon:<MyActions/>
      },{
        title:'Reglas',
        subTitle:null,
        page:'MyThreads',
        icon:<Reglas/>
      },{
        title:'Buson de sugerencia',
        subTitle:'Envia segerencia a los desarrolladores',
        page:'MyThreads',
        icon:<Buzon/>
      }
    ]

    renderItems = listItems.map((i,x) =>(
      <Pressable
        style={{ }}
        key={x}
        onPress={() => {
          this.props.navigation.navigate(i.page)
        }}
      >
        <View style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            {i.icon}
          </View>
          <View style={styles.textContainer}>
            <Text style={{
              fontSize:16,
              fontWeight:'bold',
              fontFamily:'Cerebri-Sans-Book'
            }}>{i.title}</Text>
            <Text style={{
              fontFamily:'Cerebri-Sans-Book',
              fontSize:14.5,
              color:'#9A9A9A'
            }}>{i.subTitle}</Text>
          </View>
        </View>
      </Pressable>
    ))

    return(
      <View style={styles.container}>
        <View style={{
          width:'100%',
          position:'absolute',
          backgroundColor:'#F7F8FA',
          height:35,
          top:0,
          left:0
        }}></View>
        {renderItems}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  textContainer:{
    justifyContent:'center',
    marginLeft:12
  },
  iconContainer:{
    justifyContent:'center',
    alignItems:'center',
    width:45,
    height:45,
    borderRadius:100,
    backgroundColor:'rgba(114, 114, 114,0.10)',
  },
  itemContainer:{
    alignItems:'center',
    flexDirection:'row',
    width:200,
    height:80,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  },
  drawItem:{
    padding:25
  },

})


export default DrawerMenu