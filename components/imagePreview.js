

import React from 'react';
import { StyleSheet,Image,Pressable,Text } from "react-native";


class ImagePreview extends React.Component {

  constructor(props){
    super(props)
  }

  render(){

    var blur = 0
    var screen = null
    if(this.props.blur){
      blur = 2.5
    }
    
    return(
      <Pressable
        style={{ flex:1 }}
        onPress={() => {
          this.props.navigation.navigate('FilePreview',{
            'type':'image',
            'url':this.props.url,
            'background':this.props.backgroundColor
          })
        }}
      >
        <Image
          blurRadius={blur}
          style={{...styles.image,borderRadius:this.props.borderRadius}}
          resizeMode={this.props.mode}
          source={{ uri:this.props.url }}
        />
        {screen}
      </Pressable>
    )
  }
}


const styles = StyleSheet.create({
  image:{
   flex:1,
  }
})



export default ImagePreview





