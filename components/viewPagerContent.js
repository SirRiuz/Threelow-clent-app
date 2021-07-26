
import React from 'react';
import { View,StyleSheet } from "react-native";
import ViewPager from '@react-native-community/viewpager';
import PagerDots from './pagerDots'
import ImagePreview from './imagePreview';
import VideoPreview from './videoPreview';


export default class ViewPagerCOntent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      index:0
    }
  }

  render(){
    const items = this.props.files.map((i,x) => {
      if(i.isVideo){
        return <View key={x} style={{ flex:1 }}>
          <VideoPreview 
            borderRadius={this.props.borderRadius}
            navigation={this.props.navigation} 
            data={i} />
        </View>
      } else {
        return <View key={x} style={{ flex:1 }}>
          <ImagePreview
            blur={this.props.blur}
            borderRadius={this.props.borderRadius}
            navigation={this.props.navigation}
            backgroundColor={i.pixel}
            url={i.url} />
        </View>
      }
    })
    return(
      <View style={styles.container}>
        <ViewPager
          style={{ flex:1 }}
          onPageScroll={(e) => {
            this.setState({
              index:e.nativeEvent.position
            })
          }}  
        >
          {items}
        </ViewPager>
        <View style={styles.dotContainer}>
          <PagerDots size={this.props.files.length} index={this.state.index} />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  dotContainer:{
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:0,
    height:45,
    width:'100%',
  },
  container:{
    flex:1,
  }
})


