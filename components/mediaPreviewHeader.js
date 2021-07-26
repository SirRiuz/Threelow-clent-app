

import React from 'react';
import { Text,View,StyleSheet,Image } from 'react-native';
import ImagePreview from './imagePreview'
import config from '../config'
import SwipeableMedia from './swipableMedia'


export default class MediaPreviewHeader extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    var preview = null
    if(this.props.data.media_file.length > 1){
      console.log('\n\n\nMEDIA DATA')
      var swipeItemData = this.props.data.media_file.map((i,k) => {
        var url = i.url
        if(i.isVideo){
          return({
            type:'video',
            url:url
          })
        }

        return({
          type:'image',
          url:url
        })
      })
      preview = <SwipeableMedia navigation={this.props.navigation} items={swipeItemData}/>
    } else {
      if(this.props.data.media_file[0].isVideo){
        preview = <Text>Es un video</Text>
      } else {
        preview = (
          <ImagePreview 
            navigation={this.props.navigation} 
            url={this.props.data.media_file[0].url}
          />
        )
      }
    }
    
    return(
      <View style={styles.container}>
        {preview}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:400,
  }
})


