
import React from 'react';
import { StyleSheet,Pressable,View,Text } from "react-native";
import DrawMenuIcon from '../../assets/svg/drawIcon'
import SearchIcon from '../../assets/svg/search'

export default class AppBar extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.itemTitle}>
          <Pressable
            onPress={() => {
              this.props.navigation.openDrawer()
            }}
          >
            <DrawMenuIcon/>
          </Pressable>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>

        <SearchIcon/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  title:{
    fontSize:17,
    fontWeight:'bold',
    marginLeft:7,
    color:'#212121',
    opacity:0.81
  },
  itemTitle:{
    flexDirection:'row',
    alignItems:'center'
  },
  container:{

    marginTop:35,
    backgroundColor:'white',
    width:'100%',
    height:65,
    position:'absolute',
    zIndex:10,
    top:0,
    left:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:15,
    paddingRight:20,
    borderTopEndRadius:10,
    borderTopStartRadius:10
  },
  container_:{
    paddingTop:45,
    backgroundColor:'red',
    width:'100%',
    height:85,
    position:'absolute',
    zIndex:10,
    top:0,
    left:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:15,
    paddingRight:20,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  }
})