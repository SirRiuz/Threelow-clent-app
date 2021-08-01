
import React from 'react'
import { View,Text,StyleSheet,StatusBar,ToastAndroid,Clipboard,AsyncStorage } from "react-native";
import Modal from 'react-native-modal'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
//import CopyLink from '../assets/svg/copyLink'
import InfoThread from '../assets/svg/infoThread'
import ReportThread from '../assets/svg/reportThread'
import config from '../config'
import CopyIcon from '../assets/svg/copyText'
import DeleteIcon from '../assets/svg/delete'
//import SaveThread from '../assets/svg/saveThread'



export default class ModalOptions extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showDelete:false
    }
  }

  componentDidMount(){
    this.onGetData()
  }


  onSaveThread = async () => {
    try{
      if(await AsyncStorage.getItem('thrads') == null){
        await AsyncStorage.setItem('thrads',this.props.id)
      } else {
        var threadData = await (await AsyncStorage.getItem('thrads')).concat(`:${this.props.id}`)
        await AsyncStorage.setItem('thrads',threadData)
      }
      alert(await AsyncStorage.getItem('thrads'))
      this.props.onBack()
    } catch (e){
      alert('Error..')
    }
  }


  onCopyText = () => {
    ToastAndroid.show("Copiado al portapapeles",ToastAndroid.LONG)
    Clipboard.setString(this.props.text)
    this.props.onBack()
  }


  onDelete = () => {
    const url =  `${config.apiUrl}/api/v1/thread/${this.props.id}/`
    fetch(url,{
      method:'DELETE'
    })
      .then(res => res.json())
      .then(res => {
        if(res.status == "ok"){
          ToastAndroid.show("Actualiza el feed para ver los cambios",ToastAndroid.LONG)
        }
        this.props.onBack()
      })

      .catch(err => {
        console.log('API ERROR')
      })
      .catch(err => {
        console.log('Server error ...')
      })
  }


  onThreadInfo = () => {
    this.props.onBack()
    alert('INFO ...')
  }


  onGetData = () => {
    const url = `${config.apiUrl}/api/v1/thread/check-owner/${this.props.id}/`

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          showDelete:res.result
        })
      })

      .catch(err => {
        console.log('API ERROR')
      })
      .catch(err => {
        console.log('Server error')
      })
  }


  onReport = () => {
    this.props.onBack()
    this.props.navigation.navigate({
      name:'Report',
      params:{
        navigation:this.props.navigation,
        threadId:this.props.id
      }
    })
  }


  render(){
    var listOptions = null
    var text = null
    var options = [{
            title:'Copiar texto',
            subTitle:null,
            action:this.onCopyText,
            icon:<CopyIcon/>
        },{
            title:'Mas informacion',
            subTitle:'Muestra informacion detallada',
            action:this.onThreadInfo,
            icon:<InfoThread/>
        },{
            title:'Reportar hilo',
            subTitle:'Me preocupa este hilo',
            action:this.onReport,
            icon:<ReportThread/>
        },{
          title:'Guardar',
          subTitle:null,
          action:this.onSaveThread,
          icon:null
        }
    ]

    if(this.state.showDelete){
      options.push({
        title:'Eliminar',
        subTitle:null,
        action:this.onDelete,
        icon:<DeleteIcon/>
      }) 
    }


    if(this.props.size >= 2){
      text = `${this.props.size} Respuestas`
    } else {
      text = `${this.props.size} Respuesta`
    }

    listOptions = options.map((i,x) => {

      var subTitle = null

      if(i.subTitle != null){
        subTitle = <Text style={styles.textSubTitle}>{i.subTitle}</Text>
      }
      return(
        <Pressable
          style={{ width:'100%',marginBottom:19 }}
          onPress={i.action}
        >
            <View key={x} style={styles.modalItem}>
              <View style={styles.iconContainer}>{i.icon}</View>
              <View style={{ marginLeft:10 }}>
                <Text style={styles.textTitle}>{i.title}</Text>
                {subTitle}
              </View>
            </View>
        </Pressable>
      )
    })

    return(
      <Modal
        isVisible={true}
        backdropOpacity={0.4}
        onBackdropPress={() => { this.props.onBack() }}
        onBackButtonPress={() => { this.props.onBack() }}
        onSwipeComplete={() => { this.props.onBack() }}

        swipeDirection={'down'}
        style={styles.container}
      >
        <StatusBar backgroundColor={'rgba(0,0,0,0.4)'} />
        <View style={styles.modalContainer}>
          
          <View style={styles.textContainer}>
            <Text style={styles.textResponse}>{text}</Text>
          </View>

          <View style={styles.optionsContainer}>
            <View style={styles.separator}></View>
            {listOptions}
          </View>
        </View>
      </Modal>
    )
  }
}




const styles = StyleSheet.create({
  iconContainer:{
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.05)',
    width:40,
    height:40
  },
  textResponse:{
    color:'white',
    fontWeight:'bold',
    fontSize:14
  },
  separator:{
    marginTop:15,
    width:70,
    backgroundColor:'#7A7A7A',
    height:6,
    opacity:0.15,
    marginBottom:25,
    borderRadius:100
  },
  textSubTitle:{
    fontSize:13,
    color:'rgba(0,0,0,0.63)'
  },
  textTitle:{
    fontSize:17
  },
  modalItem:{
    flexDirection:'row',
    width:'100%',
  },
  textContainer:{
    alignItems:'center',
    alignContent:'center',
    height:15,
    marginBottom:30
  },
  optionsContainer:{
    alignItems:'center',
    paddingRight:20,
    paddingLeft:20,
    backgroundColor:'white',
    borderTopStartRadius:15,
    borderTopEndRadius:15,
  },
  container:{
    alignItems:'center',
    flex:1,
    margin:0,
  },
  modalContainer:{
    width:'100%',
    position:'absolute',
    bottom:0,
  }
})


