
import React from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'


export default class ImagePreview extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.container}>
        <Image
          resizeMode='cover'
          style={{ flex:1,borderRadius:10 }}
          source={{ uri:this.props.uri }}
        />
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container:{
    width:300,
    height:180,
    marginRight:5,
    marginLeft:5
  }
})
