

import React from 'react';
import { Text,View,StyleSheet } from 'react-native';
import ReactionContainer from '../reactionContainer'
import Flag from 'react-native-flags';
import TextView from '../textView'
import Translator from '../translator'
import * as Font from 'expo-font';




export default class HeaderItem extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      isLoadFont:false
    }
  }

  // translateP = async () => {
  //   const result = await W(this.props.data.text, {
  //     to: "en",
  //   });
  //   alert(result)
  // }

  async loadFont () {
    await Font.loadAsync({
      'Cerebri-Sans-Book':require('../../assets/fonts/Cerebri-Sans-Book.ttf')
    })
    this.setState({isLoadFont:true})
  }


  componentDidMount() {
    this.loadFont()
  }

  render(){
    if(!this.state.isLoadFont) {
      return null
    }


    return(
      <View style={styles.container}>
        <TextView
          navigation={this.props.navigation}
          style={{
            fontSize:19,
            paddingBottom:7,
            fontFamily:'Cerebri-Sans-Book'
          }}>
            {this.props.data.text}
        </TextView>
        <Translator
          nativeLenguaje={this.props.data.nativeLenguaje}
          navigation={this.props.navigation}
          text={this.props.data.text}
        />
        <View style={styles.metaInfo}>
          <ReactionContainer data={this.props.data} />
          <Flag
            code="CO"
            size={24}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dateTimeText:{
    color:'rgba(0,0,0,0.35)'
  },
  metaInfo:{
    paddingBottom:10,
    paddingTop:5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  text:{

  },
  container:{
    backgroundColor:'white',
    flex:1,
    width:'100%',
    justifyContent:'flex-end',
    marginBottom:35,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    paddingRight:20,
    paddingLeft:20,
    paddingTop:10,
    paddingBottom:5
  }
})


