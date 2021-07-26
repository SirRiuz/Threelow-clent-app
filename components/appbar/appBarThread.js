

import React from 'react';
import BackIcon from '../../assets/svg/back'
import { Text,View,StyleSheet,Pressable,StatusBar } from 'react-native';



export default class AppBarThread extends React.Component {


  constructor(props){
    super(props)
  }


  render(){
    return(
      <View style={{...styles.appBarContainer}}>
        <StatusBar translucent={true}/>
        <Pressable
          onPress={() => {
            this.props.navigation.goBack()
          }}
        >
          <BackIcon color='#000'/>
        </Pressable>

        <Text style={{ ...styles.appBarTitle}}>Thread</Text>

        <View></View>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  appBarTitle:{
    fontWeight:'bold',
    fontSize:15,
    opacity:0.90
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