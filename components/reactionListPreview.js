
import React from 'react';
import { Text,View,StyleSheet } from "react-native";
import config from '../config'
import ReactionItem from './reactionItem'


export default class ReactionListPreview extends React.Component {

  constructor(props){
    super(props)
  }


  render(){
    var reaction = this.props.data.reactionsPreview.preview.map((i,k) => {
      var url = `${config.apiUrl}/${i.url}`
      return(<ReactionItem url={url} key={k} />)
    })
    
    return(
      <View style={{ flexDirection:'row' }}>
        {reaction}
        <Text style={styles.text}>{this.props.count}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  text:{
    fontSize:12.5,
    fontWeight:'900',
    color:'rgba(0,0,0,0.5)',
    justifyContent:'center'
  },
  previewLoader:{
    backgroundColor:'red',
    width:150,
    height:24.5,
    backgroundColor:'rgba(0,0,0,0.07)',
    borderRadius:5
  }
})