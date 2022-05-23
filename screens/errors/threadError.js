

import React from 'react';
import { View,StyleSheet,StatusBar ,Text,Pressable } from 'react-native';
import * as Font from 'expo-font';
import Close from '../../assets/svg/close'


export default class ThreadError extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLoadFont:false
    }
  }

  async loadFont () {
    await Font.loadAsync({
      'Cerebri-Sans-Book':require('../../assets/fonts/Cerebri-Sans-Book.ttf')
    })
    this.setState({isLoadFont:true})
  }

  componentDidMount(){
    this.loadFont()
  }

  render(){
    if(this.state.isLoadFont){
      return(
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'} />
          <View style={styles.header}>
            <View></View>
            
            <Pressable
              onPress={() => {
                alert('d')
              }}
            >
              <View style={styles.close}>
                <Close/>
              </View>
            </Pressable>

          </View>
          <Text style={{
            fontSize:35,
            fontWeight:'bold',
            fontFamily:'Cerebri-Sans-Book',
            marginBottom:20
          }}>:(</Text>
          <Text style={{
            opacity:.85,
            fontSize:13.5,
            fontFamily:'Cerebri-Sans-Book',
          }}>{this.props.messege}</Text>
        </View>
      )
    }

    return <View></View>
  }
}


const styles = StyleSheet.create({
  header:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    top:0,
    width:'100%',
    height:150,
    position:'absolute',
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  close:{
    justifyContent:'center',
    alignItems:'center',
    width:65,
    height:50
  }
})