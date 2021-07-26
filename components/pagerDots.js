

import React from 'react';
import { View,Text,StyleSheet } from "react-native";


export default class PagerDots extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    var dot = [...new Array(this.props.size).keys()].map((x,i) => {
        if(x == this.props.index) {
          return <View key={x} style={styles.dotFocus}></View>
        } else { return <View key={x} style={styles.dot}></View> }
    })
    return(
      <View style={styles.container}>
        {dot}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    flex:1,
    flexDirection:'row'
  },
  dot:{
    borderRadius:100,
    marginRight:5,
    opacity:0.5,
    backgroundColor:'white',
    height:6.5,
    width:6.5
  },
  dotFocus:{
    borderRadius:100,
    marginRight:5,
    backgroundColor:'white',
    height:10,
    width:10
  }
})