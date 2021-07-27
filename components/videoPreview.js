
import React from 'react';
import { View,StyleSheet,Pressable } from "react-native";
import { Video } from 'expo-av';


export default class VideoPreview extends React.Component {

  constructor(props){
    super(props)
  }

  render(){

    if(this.props.blur){
      return <View style={{ backgroundColor:'#000',width:'100%',height:'100%' }}></View>
    }

    return(
      <Pressable
        style={{ flex:1 }}
        onPress={() => {
          this.props.navigation.navigate('FilePreview',{
            'type':'video',
            url:this.props.data.url
          })
        }}
      >
        <Video
          style={{...styles.video,borderRadius:this.props.borderRadius}}
          resizeMode={'cover'}
          isLooping
          onError={() => {
            alert('Load errpr')
          }}
          shouldPlay={true}
          volume={0}
          source={{ uri:this.props.data.url }}
        />


      </Pressable>
    )
  }
}


const styles = StyleSheet.create({
  video:{
    flex:1,
    borderRadius:9,
  }
})

