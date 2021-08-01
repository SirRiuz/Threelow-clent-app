
import React from 'react';
import { Text, View,StyleSheet,Pressable,StatusBar,AsyncStorage } from 'react-native';
import Close from '../../assets/svg/close'
import config from '../../config.js'
import Modal from 'react-native-modal'
import { BarIndicator } from 'react-native-indicators'
import * as Localization from 'expo-localization';



class AppBarCreateThread extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLoad:false,
      isVisibleSnak:false
    }
  }

  onSaveThread = async (id) => {
    try{
      if(await AsyncStorage.getItem('myThread') == null){
        await AsyncStorage.setItem('myThread',id)
      } else {
        var threadData = await (await AsyncStorage.getItem('myThread')).concat(`:${id}`)
        await AsyncStorage.setItem('myThread',threadData)
      }
    } catch (e){
      alert('Error..')
    }
  }

  onCreateThread = (url) => {
    this.setState({
      isLoad:true
  })

    var data = new FormData()
    data.append('text',this.props.data.text)
    data.append('countryCode',Localization.region)

    for(var x=0; x< this.props.data.media.length; x++){
      var formatFile = this.props.data.media[x].uri.split('.')
      formatFile = formatFile[formatFile.length - 1]

      var fileData = {
        name:`file${x}.${formatFile}`,
        type:`${this.props.data.media[x].type}/${formatFile}`,
        uri:this.props.data.media[x].uri,
      }
      data.append(`file${x}.${formatFile}`,fileData)
    }

    fetch(url,{
      method:'POST',
      body:data,
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    })

      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoad:false
        })
        if(res.status != 'ok') {
          alert('Error al crear el hilo')
        } else {
          //console.log(res.data.id)
          this.onSaveThread(res.data.id)
          this.props.navigation.goBack()
        }
      })

      .catch(err => {
        console.error('Error en el request')
        console.log(url)
        console.log(err)
      })
      .catch(err => {
        console.error('Error al conextarse con sel servidor')
      })
  }



  render(){
    var pathIdUrl = ''
    var title = 'Crear hilo'

    if(this.props.response){
      title = 'Responder hilo'
      pathIdUrl = `${this.props.data.threadId}/`
    }

    return(
      <View style={styles.appbarContainer}>
        <View style={styles.actionCOntainer}>
          <Pressable
            onPress={() => {
              this.props.navigation.goBack()
            }}
          >
            <Close/>
          </Pressable>
          <Text style={styles.textTitle}>{title}</Text>
        </View>

        <View style={styles.create}>
          <Pressable
            onPress={() => {
              var url = `${config.apiUrl}/api/v1/thread/${pathIdUrl}`
              this.onCreateThread(url)
            }}
          >
            <Text style={{ color:'#fff',fontWeight:'bold' }}>Create</Text>
          </Pressable>
        </View>


        <Modal
          isVisible={this.state.isLoad}
          style={{alignItems:'center'}}
          backdropOpacity={0.4}
        >
          <StatusBar translucent={true} backgroundColor='rgba(0,0,0,0.4)' />
          <View style={styles.modalLoad}>
            <BarIndicator color='#d4d4d4'/>
          </View>
        </Modal>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  textTitle:{
    marginLeft:25,
    fontSize:17,
    fontWeight:'bold',
    color:'rgba(0,0,0,0.80)'
  },
  actionCOntainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  appbarContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    height:100,
    backgroundColor:'#fff',
    paddingLeft:18,
    paddingRight:18,
    paddingTop:30
  },
  modalLoad:{
    width:100,
    height:100,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    flexDirection:'row'
  },
  create:{
    flexDirection:'row',
    backgroundColor:'rgba(0,0,0,0.75)',
    width:85,
    height:40,
    borderRadius:100,
    padding:10,
    justifyContent:'center',
  },
  itemNavRigth:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:100,
  },
  title:{
    marginLeft:14,
    fontSize:16,
    fontWeight:'bold',
    color:'rgba(33, 33, 33,0.9)'
  },
  itemNavLeft:{
    flexDirection:'row',
    alignItems:'center',
  },
  appbar:{
    height:60,
    justifyContent:'space-between',
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'row',
    alignItems:'center',
    marginTop:40
  }
})


export default AppBarCreateThread