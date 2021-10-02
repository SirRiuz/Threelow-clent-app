

import React from 'react';
import BackIcon from '../../assets/svg/back'
import { Text,View,StyleSheet,Pressable,StatusBar } from 'react-native';
import * as Font from 'expo-font';


export default class AppBarThread extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      isLoadFont:false
    }
  }

  async loadFont () {
    await Font.loadAsync({
      'Cerebri-Sans-Book':require('../../assets/fonts/Cerebri-Sans-Book.ttf')
    })
    this.setState({isLoadFont:true})
  }

  componentDidMount(){
    this.loadFont()
  }


  render(){

    if(!this.state.isLoadFont){
      return null
    }


    return(
      <View style={{...styles.appBarContainer}}>
        <StatusBar translucent={true}/>
        <Pressable
          onPress={() => {
            this.props.navigation.goBack()
          }}
        >
          <View style={styles.iconContainer}>
            <BackIcon color='#000'/>
          </View>
        </Pressable>

        <Text style={{
          fontFamily:'Cerebri-Sans-Book',
          fontWeight:'bold',
          fontSize:15.8,
          opacity:0.90,
        }}>Thread</Text>

        <View></View>
      </View>
    )
  }

}


const styles = StyleSheet.create({

  iconContainer:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#F7F8FA',
    width:35,
    height:35,
    borderRadius:100
  },
  appBarContainer:{
    marginTop:35,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    height:70,
    width:'100%',
    top:0,
    left:0,
    zIndex:100,
    alignItems:'center',
    paddingLeft:13,
    paddingRight:22,
    borderTopEndRadius:10,
    borderTopStartRadius:10
  }
})