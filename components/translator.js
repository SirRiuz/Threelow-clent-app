
import React from 'react';
import { StyleSheet,View,Pressable,Text } from 'react-native';
import config from '../config'
import TextView from './textView'
import { BarIndicator } from 'react-native-indicators'
import * as Localization from 'expo-localization';



export default class Translator extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      textTraduced:null,
      status:null
    }
  }

  onTranslate = () => {
    this.setState({
      status:'load'
    })
    var lenguaje = Localization.locale.split('-')[0]
    var url = `${config.apiUrl}/api/v1/translate-thread/?tl=es&to=${lenguaje}&text=${this.props.text}`
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
            status:null,
            textTraduced:res.text
          })
      })

      .catch(err => {
          alert('error')
      })
      .catch(err => {
          alert('error')
      })
  }

  render(){
    const syslemLenguaje = Localization.locale.split('-')[0]
    if(this.props.nativeLenguaje == syslemLenguaje){
      return null
    }

    if(this.state.status == 'load'){
      return <View style={styles.loadContainer}>
          <BarIndicator size={25}/>
      </View>
    }

    if(this.state.textTraduced != null){
      // {this.state.textTraduced}
      return(
        <View style={styles.translatedText}>
          <TextView
            style={styles.text}
            navigation={this.props.navigation}
          >
            {this.state.textTraduced}
          </TextView>
        </View>
      )
    }

    return(
      <Pressable
        onPress={this.onTranslate}
      >
        <View>
            <Text>Traducir</Text>
        </View>
      </Pressable>
    )
  }
}





const styles = StyleSheet.create({
  loadContainer:{
    marginBottom:10,
    marginTop:10
  },
  translatedText:{
    marginTop:5,
    marginBottom:5,
    backgroundColor:'rgba(0,0,0,0.03)',
    borderWidth:2.5,
    borderColor:'#F7F8FA',
    borderRadius:4,
  },text:{
    fontSize:17,
    paddingBottom:7
  }
})




