
import React from 'react';
import { View,StyleSheet,Text,Pressable } from "react-native";
import BackIcon from '../../assets/svg/back'
import ContentPreview from '../contentPreview'


export default class CollapsableAppBar extends React.Component{

  constructor(props){
    super(props)
  }


  render(){
    var heightDinamic = 410 - (this.props.position / 2.1)
    var mediaContainer = (<ContentPreview 
      files={this.props.data}
      size={this.props.data.length}
      navigation={this.props.navigation}
    />)

    if(heightDinamic <= 90) {
      heightDinamic = 90
      mediaContainer = (<ContentPreview
        navigation={this.props.navigation}
        files={this.props.data}
        size={this.props.data.length}
        blur={true}
        />)
    }
    return(
      <View style={{ ...styles.container,height:heightDinamic }}>
        {mediaContainer}
        <View style={styles.navigation}>
          
          <Pressable
            onPress={() => {
              this.props.navigation.goBack()
            }}
          >
            <View style={styles.btnContainer}>
              <BackIcon color='#fff' />
            </View>
          </Pressable>

          <Text></Text>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  btnContainer:{
    justifyContent:'center',
    alignItems:'center',
    width:35,
    height:35,
    backgroundColor:'rgba(0,0,0,0.09)',
    borderRadius:100,
  },
  navigation:{
    justifyContent:'space-between',
    flexDirection:'row',
    position:'absolute',
    top:35,
    width:'100%',
    paddingRight:20,
    paddingLeft:20
  },
  container:{
    height:400,
    justifyContent:'center',
  }
})





