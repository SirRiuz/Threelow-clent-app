
import React from 'react'
import { View,Text,StyleSheet,StatusBar,ToastAndroid,Clipboard } from "react-native";
import Modal from 'react-native-modal'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


export default class ThreadInfo extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <Modal
        isVisible={true}
      >
        <View>
          <Text>Modal</Text>
        </View>
      </Modal>
    )
  }

}