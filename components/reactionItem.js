

import React from 'react';
import { StyleSheet,View,Image } from 'react-native';


export default class ReactionItem extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.reactionItemContainer}>
        <Image
          resizeMode={'contain'}
          style={styles.image}
          source={{ uri:this.props.url }}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  image:{
    flex:1,
    borderRadius:6
  },
  reactionItemContainer:{
    padding:1.5,
    width:26.7,
    height:26.7,
    marginRight:3,
  }
})