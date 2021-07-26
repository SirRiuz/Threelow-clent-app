
import React from 'react';
import { StyleSheet,View } from 'react-native';

export default class ThreadIndicator extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    if(this.props.size <= 0){ return null }
    var indicators = [...new Array(this.props.size).keys()].map((i,k) =><View key={k} style={styles.next}></View>)

    return(
      <View style={styles.container}>
        <View style={styles.start}></View>
        {indicators}
        <View style={styles.end}></View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  end:{
    width:13,
    height:13,
    backgroundColor:'#e2e2e5',
    borderRadius:100,
    marginTop:2.8,
  },
  next:{
    flex:1,
    //height:'50%',
    borderRadius:100,
    backgroundColor:'#e2e2e5',
    width:3,
    //marginTop:2.8,
    //marginBottom:2.8,
  },
  start:{
    marginBottom:2.8,
    width:13,
    height:13,
    backgroundColor:'#e2e2e5',
    borderRadius:100
  },
  container:{
    alignItems:'center',
    width:0,
    paddingRight:20
  }
})
