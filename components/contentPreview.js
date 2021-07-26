
import React from 'react';
import { View,Text,StyleSheet } from "react-native";
import ViewPagerCOntent from '../components/viewPagerContent'
import ImagePreview from '../components/imagePreview'
import VideoPreview from '../components/videoPreview'

/*

  blur --- Este prop pondra activar el blur de las imagenes

*/



export default class ContentPreview extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    var content = null
    if(this.props.size >1){
      content = <ViewPagerCOntent
        blur={this.props.blur}
        borderRadius={this.props.borderRadius}
        navigation={this.props.navigation}
        files={this.props.files} />
    } else {
      if (this.props.files[0].isVideo){
        content = <VideoPreview
          navigation={this.props.navigation}
          borderRadius={this.props.borderRadius}
          blur={this.props.blur}
          data={this.props.files[0]}
        />
      } else {
        content = <ImagePreview
          navigation={this.props.navigation}
          borderRadius={this.props.borderRadius}
          blur={this.props.blur}
          url={this.props.files[0].url}
          backgroundColor={this.props.files[0].pixel}
        />
      }
    }
    
    return(
      <View style={styles.container}>
        {content}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
  }
})


