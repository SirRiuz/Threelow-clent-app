
import React from 'react';
import { View,StyleSheet,Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Slider from '@react-native-community/slider';
import CloseWite from '../assets/svg/closeWite'
import { Video } from 'expo-av';
import PauseIcon from '../assets/svg/pause'
import PlayIcon from '../assets/svg/play'
import { MaterialIndicator } from 'react-native-indicators'


export default class VideoPreviewModal extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      videoRef:React.createRef(),
      playing:true,
      positionSlider:0,
      duration:0,
      isLoad:true
    }
  }

  onBack = () => {
    this.props.navigation.goBack()
  }

  onMove = (e) => {
    const playbackObject = this.state.videoRef.current  
    var positionMillis = (this.state.duration * e) / 100
  
    playbackObject.setPositionAsync(positionMillis)
  }

  onPlayingVideo = (e) => {
    var videoPosition = (e.positionMillis*100)/e.durationMillis
    this.setState({
      positionSlider:videoPosition,
      duration:e.durationMillis
    })
  }

  onPlay = () => {
    //this.state.videoRef.current.playAsync()
    const playbackObject = this.state.videoRef.current
    if(this.state.playing){
      this.setState({
        playing:false
      },() => {
        playbackObject.pauseAsync()
      })

    } else {
      this.setState({
        playing:true
      },() => {
        playbackObject.playAsync()
      })
    }
  }

  render(){
    var iconPlaying = <PlayIcon/>
    var loadSpiner = null

    if(this.state.isLoad){
      loadSpiner = (<View style={styles.loadSpiner}>
        <MaterialIndicator color='white' />
      </View>)
    }

    if(this.state.playing){
      iconPlaying = <PauseIcon/>
    }

    return(
      <View style={styles.container}>
        <StatusBar style={'light'} />
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
          {loadSpiner}
            <View style={styles.videoContainer}>
              <Pressable
                style={{ flex:1 }}
                onPress={this.onPlay}
              >
                <Video
                  style={{ flex:1,borderRadius:5 }}
                  ref={this.state.videoRef}
                  isLooping
                  onReadyForDisplay={() => {
                    this.setState({
                      isLoad:false
                    })
                  }}
                  onError={( ) => {
                    alert('Load video error...')
                  }}
                  onPlaybackStatusUpdate={this.onPlayingVideo}
                  resizeMode={'contain'}
                  shouldPlay={this.state.playing}
                  source={{ uri:this.props.url }}
                >
                </Video>
              </Pressable>
            </View>
        
            <View style={styles.customControlsContainer}>
              
              <Pressable onPress={this.onPlay}>
                <View style={styles.pauseButtom}>
                  {iconPlaying}
                </View>
              </Pressable>

              <View style={styles.sliderContainer}>
                <Slider
                  style={styles.slider}
                  value={this.state.positionSlider}
                  minimumValue={0}
                  maximumValue={100}
                  onValueChange={this.onMove}
                  thumbTintColor={'#FFFFFF'}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="rgba(255, 255, 255,0.9)"
                />
              </View>
            </View>

        </View>

      </View>
    )
  }
}



const styles = StyleSheet.create({
  loadSpiner:{
    top:150
  },
  slider:{
    width:'100%',
  },
  sliderContainer:{
    justifyContent:'center',
    width:300,
    height:30,
  },
  pauseButtom:{
    width:30,
    height:30,
    marginRight:10,
    justifyContent:'center',
    alignItems:'center'
  },
  customControlsContainer:{
    height:100,
    width:'100%',
    position:'absolute',
    bottom:0,
    alignItems:'center',
    paddingRight:20,
    paddingLeft:20,
    flexDirection:'row'
  },
  videoContainer:{
    width:'100%',
    height:500,
  },
  headerContainer:{
    marginTop:60,
    justifyContent:'center',
  },
  container:{
    flex:1,
    width:'100%',
    backgroundColor:'red',
  },
  imageContainer:{
    width:'100%',
    height:'100%',
    backgroundColor:'#000',
    position:'absolute',
    zIndex:-90,
    justifyContent:'center',
    alignItems:'center'
  },
  closeButtom:{
    backgroundColor:'rgba(0,0,0,0.2)',
    height:45,
    width:45,
    marginLeft:19,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
  }
})

