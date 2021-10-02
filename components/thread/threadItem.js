
import React from 'react';
import { StyleSheet,View } from 'react-native';
import ReactionContainer from '../reactionContainer'
import Flag from 'react-native-flags';
//import MediaPreviewViewPort from '../mediaPreview'   ELIMINAR
import TextView from '../textView'
import ContentPreview from '../contentPreview'
import * as Font from 'expo-font';



export default class ThreadItem extends React.Component {

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

  componentDidMount() {
    this.loadFont()
  }


  render(){
    var separator = null
    var fileData = null
    if (this.props.file.length >= 1){
      fileData = (
        <View style={{ height:380,marginBottom:7,marginTop:5 }}>
          <ContentPreview
           navigation={this.props.navigation}
           borderRadius={10}
           files={this.props.file}
           size={this.props.file.length}/>
        </View>
      )
    }


    if(this.props.sub){
      separator = <View style={styles.separator}></View>
    }

    if(!this.state.isLoadFont) {
      return null
    }

    
    return(
      <View style={styles.container}>
        {separator}
        <TextView style={{
          fontFamily:'Cerebri-Sans-Book',
          fontSize:15.5,
          color:'rgba(33, 33, 33,0.89)',
          fontSize:15.5,
          marginBottom:3.5,
        }} navigation={this.props.navigation}>{this.props.text}</TextView>
        {fileData}
        <View style={styles.dateContainer}>
          <ReactionContainer data={this.props.reactions}/>
          <Flag
            code={this.props.country}
            size={16}
          />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    separator:{
      width:'100%',
      height:15,
    },
    dateContainer:{
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    text:{
      
      
    },
    container:{
      flex:1,
    }

})
  