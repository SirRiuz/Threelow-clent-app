
import React from 'react';
import { StyleSheet,View,Pressable,Vibration } from 'react-native';
import ThreadItem from '../thread/threadItem'
import ThreadIndicator from '../thread/threadIndicator'
import config from '../../config'
import ModalOptions from '../modalOptions'


export default class ThreadContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isVisible:false
    }
  }

  render(){
    var separator = null
    var subThreads = null
    var modal = null
    var ads = null


    if(this.state.isVisible){
      modal = <ModalOptions 
        text={this.props.data.text} 
        size={this.props.data.subThreadsSize} 
        id={this.props.data.id} 
        navigation={this.props.navigation} 
        onBack={() => {
          this.setState({ isVisible:false })
        }}
      />
    }

    var subThreads = this.props.data.subThreads.map((i,x) => {
      return <ThreadItem
        key={x}
        text={i.text}
        country={i.owner.country}
        reactions={{
         reactionsPreview:i.reactionsPreview,
         preview:i.reactionsPreview.preview,
         id:i.id
       }}
       file={i.media_files}
       navigation={this.props.navigation}
       sub={true}
     />
    })

    if(this.props.separator){
      separator = (<View style={styles.separator}></View>)
    }

    if(this.props.ads){
      ads = <Text>ADS</Text>
    }


    return(
      <Pressable
        onLongPress={() => {
          Vibration.vibrate(40)
          this.setState({
            isVisible:true
          })
        }}
        onPress={() => {
          this.props.navigation.navigate({
            name:'ViewThreadScreen',
            params:{
              header:this.props.data,
              navigation:this.props.navigation,
              url:`${config.apiUrl}/api/v1/thread/sub/${this.props.data.id}/`
            },
            key:`${this.props.data.id}${Math.random()}`
          })
        }}
      >
        <View>

          <View style={styles.container}>
            <ThreadIndicator size={this.props.data.subThreads.length}/>

            <View style={styles.threadItemContainer}>
              <ThreadItem country={this.props.data.ownerCountry}  text={this.props.data.text} reactions={{
                reactionsPreview:this.props.data.reactionsPreview,
                preview:this.props.data.reactionsPreview.preview,
                id:this.props.data.id
              }} file={this.props.data.media_files} navigation={this.props.navigation}/>
              { subThreads }
            </View>
          </View>

          {modal}
          {separator}
          {ads}

        </View>
      </Pressable>
    )
  }
}


const styles = StyleSheet.create({
  separator:{
    width:'100%',
    height:25,
  },
  threadItemContainer:{
    flex:1,
  },
  container:{
    flexDirection:'row',
    backgroundColor:'#fff',
    borderRadius:5,
    padding:20
  }
})


