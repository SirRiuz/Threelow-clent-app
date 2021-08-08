

import React from 'react'
import { View,Text,StyleSheet } from 'react-native'



export default class ThreadInfo extends React.Component{

  constructor(props){
    super(props)
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.itemContainer}>

          <View style={styles.item}>
            <Text style={styles.titlr}>Thread-ID</Text>
            <Text>8c48ffd35e40a59f1ad6d6914e145d16ac2d8a0a936a470</Text>
          </View>
          
          <View style={styles.item}>
            <Text style={styles.titlr}>User-Agent </Text>
            <Text>user@ac2d8a0a936a470</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.titlr}>Is-op</Text>
            <Text>true</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.titlr}>Country</Text>
            <Text>CO</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.titlr}>Device</Text>
            <Text>Android</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.titlr}>Is-Admin</Text>
            <Text>False</Text>
          </View>
        </View>

        <View style={styles.itemContainer}>

          <View style={styles.item}>
            <Text style={styles.titlr}>Type</Text>
            <Text>Thread</Text>
          </View>
          
          <View style={styles.item}>
            <Text style={styles.titlr}>Status</Text>
            <Text>Activate</Text>
          </View>

        </View>

        <View style={styles.itemContainer}>

          <View style={styles.item}>
            <Text style={styles.titlr}>Reactions</Text>
            <Text>10k</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.titlr}>Coemts</Text>
            <Text>1k</Text>
          </View>

        </View>


      </View>
    )
  }

}


const styles = StyleSheet.create({
  titlr:{
    fontSize:15,
    fontWeight:'bold'
  },
  item:{
    marginBottom:20,
  },
  threadId:{
    fontSize:14,
    fontWeight:'bold'
  },
  container:{
    flex:1,
    marginTop:35,
    justifyContent:'center',
    alignItems:'center'
  },
  itemContainer:{
    width:'100%',
    padding:20,
    borderRadius:1,
    backgroundColor:'white',
    marginBottom:15
  }
})