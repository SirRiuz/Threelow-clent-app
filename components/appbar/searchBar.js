

import React from 'react'
import { View,StyleSheet,Text,TextInput,Pressable } from 'react-native'
import Close from '../../assets/svg/close'
import BackIcon from '../../assets/svg/back'



export default class SearchBar extends React.Component {

  constructor(props){
    super(props)
  }


  onEndEditing = (e) => {
    if(this.props.onSearch != undefined){
      //this.props.onSea()
      this.props.onSearch(e.nativeEvent.text)
    }
  }

  onChange = (e) => {
    if(this.props.onChange != undefined){
      this.props.onChange(e.nativeEvent.text)
    }
  }

  render(){
    return(
      <View style={styles.barContainer}>
        
        <Pressable
          onPress={() => {
            this.props.navigation.goBack()
          }}
        >
          <View style={styles.closeContainer}>
            <BackIcon color={'rgba(0,0,0,0.8)'}/>
          </View>
        </Pressable>

        <TextInput
          selectionColor={'#F7F8FA'}
          onEndEditing={this.onEndEditing}
          onChange={this.onChange}
          style={styles.inputBox}
          autoFocus={true}
          placeholder={'Buscar'}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  closeContainer:{
  },
  inputBox:{
    borderRadius:100,
    paddingLeft:20,
    flex:1,
    backgroundColor:'#F7F8FA',
    marginLeft:10,
    height:40,
  },
  barContainer:{
    borderTopRightRadius:10,
    borderTopStartRadius:10,
    alignItems:'center',
    flexDirection:'row',
    paddingRight:20,
    paddingTop:30,
    paddingLeft:20,
    justifyContent:'center',
    backgroundColor:'white',
    height:100
  }
})