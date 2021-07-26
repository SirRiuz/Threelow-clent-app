
import React from 'react';
import { Image, View,StyleSheet,Pressable, Dimensions } from "react-native";
import { StatusBar } from 'expo-status-bar';
import ImageZoom from 'react-native-image-pan-zoom';
import CloseWite from '../assets/svg/closeWite'
import NavigationBar from 'react-native-navbar-color'


export default class ImagePreviewZoom extends React.Component {

  constructor(props){
    super(props)
  }


  componentDidMount(){
    //console.log(NavigationBar.setColor('red'))
  }

  onBack = () => {
    this.props.navigation.goBack()
  }

  render(){
    return(
      <View style={{...styles.container,backgroundColor:this.props.background}}>
        <StatusBar translucent style={'light'}/>
        <View style={styles.headerContainer}>
          <Pressable
            onPress={this.onBack}
          >
            <View style={styles.closeButtom}>
              <CloseWite/>
            </View>
          </Pressable>
        </View>

        <View style={styles.imageContainer}>
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={400}
            imageHeight={520}
          >
            <Image
              style={{ flex:1 }}
              resizeMode={'contain'}
              source={{ uri:this.props.url }}
            />
          </ImageZoom>
        </View>

      </View>
    )
  }
}



const styles = StyleSheet.create({
  headerContainer:{
    marginTop:60,
    justifyContent:'center',
  },
  container:{
    flex:1,
    width:'100%',
    height:'100%'
  },
  imageContainer:{
    width:'100%',
    height:'100%',
    position:'absolute',
    zIndex:-90
  },
  closeButtom:{
    height:45,
    width:45,
    marginLeft:15,
    top:-10,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
  }
})

