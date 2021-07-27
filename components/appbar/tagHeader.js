
import * as React from 'react';
import { Text, View, StyleSheet,Pressable } from 'react-native';
import BackIcon from '../../assets/svg/back'


export default class TagHeader extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.container}>

        <View>
          <Pressable
            onPress={() => {
              this.props.navigation.goBack()
            }}
          >
            <BackIcon color={'#000'}/>
          </Pressable>

        </View>
        <View style={{ width:250 }}>
            <Text style={styles.tahNameStyle}><Text style={styles.tagStyle}>#</Text>{this.props.tag}</Text>
        </View>
        <View style={{ width:10,height:10}}></View>
        
      </View>
    )
  }
}


const styles = StyleSheet.create({
  tahNameStyle:{
    width:'100%',
    fontSize:15.5,
    textAlign:'center',
    fontWeight:'bold',

  },
  tagStyle:{
    fontSize:19,
    color:'#000'
  },
  container:{
    flexDirection:'row',
    width:'100%',
    height:65,
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'white',
    paddingRight:20,
    paddingLeft:20,
    marginTop:35,
    borderTopEndRadius:10,
    borderTopStartRadius:10
  }
})