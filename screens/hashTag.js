

import React from 'react';
import { View,Text,StyleSheet,StatusBar } from 'react-native';
import config from '../config'
import TimeLine from '../components/Timeline'
import TagHeader from '../components/appbar/tagHeader'
import FabCreate from '../components/fabCreate'


export default class TagScreen extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    const url = `${config.apiUrl}/api/v1/timeline/?tag=${this.props.route.params.tag.replace('#','')}`
    return(
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <TagHeader 
          tag={this.props.route.params.tag.replace('#','')}
          navigation={this.props.route.params.navigation}
        />

        <View style={{ width:'100%',height:'100%',flex:1 }}>
          <TimeLine
            separator={true}
            url={url}
            navigation={this.props.route.params.navigation}
          />
        </View>

      </View>
    )
  }

}



const styles = StyleSheet.create({
    container:{
      backgroundColor:'#F7F8FA',
      flex:1,
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center'
    }
})