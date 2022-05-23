

import { StyleSheet,View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TimeLine from '../components/Timeline'
import AppBar from '../components/appbar/appBar'
import config from '../config'



export default class FeedThrends extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    console.log(`${config.apiUrl}/api/v1/timeline/`)
    return(
      <View style={styles.container}>
        <StatusBar translucent={true}/>
        <AppBar title='Trends' navigation={this.props.navigation}/>        
        <View style={{ marginTop:80,flex:1 }}>
          <TimeLine
            ads={false}
            separator={true}
            navigation={this.props.navigation}
            url={`${config.apiUrl}/api/v1/timeline/`}
          />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#F7F8FA'
  }
})


