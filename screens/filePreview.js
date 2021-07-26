

import React from 'react';
import { StyleSheet,View } from 'react-native';
import ImagePreviewZoom from '../components/ImagePreviewZoom'
import VideoPreviewModal from '../components/videoPreviewModal'


export default class FilePreview extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    var media = null

    if(this.props.route.params.type == 'image'){
        media = (<ImagePreviewZoom
          navigation={this.props.navigation}
          url={this.props.route.params.url}
          background={this.props.route.params.background}
        />)
    } else {
        media = (<VideoPreviewModal navigation={this.props.navigation} url={this.props.route.params.url}/>)
    }

    return(
      <View style={styles.container}>
        {media}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})