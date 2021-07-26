

import React from 'react';
import {View,StyleSheet,StatusBar } from 'react-native';
import TimeLine from '../components/Timeline'
import CollapsableAppBar from '../components/appbar/CollapsableAppBar'
import AppBarThread from '../components/appbar/appBarThread'
import BottomCreate from '../components/bottomCreate'


export default class ViewThread extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      positionY:0,
    }
  }


  render(){
    var appBar = <AppBarThread navigation={this.props.route.params.navigation}/>
    var opThreadData = null
    var statusBar = <StatusBar barStyle={'dark-content'}/>


    if(this.props.route.params.header != undefined){
      opThreadData = {
        reactionsPreview:this.props.route.params.header.reactionsPreview,
        text:this.props.route.params.header.text,
        type:'header',
        subThreads:[],
        media_files:this.props.route.params.header.media_files
      }
    }

    if(this.state.media_files_length > 0){
      statusBar = <StatusBar barStyle={'light-content'}/>
      appBar = <CollapsableAppBar
        position={this.state.positionY}
        data={this.state.files}
        navigation={this.props.route.params.navigation}
      />
    }
  
    return(
      <View style={styles.container}>
        {statusBar}
        {appBar}
        <TimeLine
          navigation={this.props.route.params.navigation}
          headerData={opThreadData}
          threadOpData={(data) => {
            console.log('NEW DATA')
            this.setState({
              files:data.media_files,
              media_files_length:data.media_files.length
            })
          }}
          url={this.props.route.params.url}
          onScroll={(y) => {
            //this.onCollapse(y)
            this.setState({
              positionY:y
            })
          }}
        />
        <BottomCreate
          id={this.props.route.params.header.id}
          navigation={this.props.route.params.navigation}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,

  }
})



