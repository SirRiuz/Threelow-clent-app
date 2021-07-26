

import React from 'react'
import { View,Text,FlatList,StyleSheet,Pressable,ToastAndroid } from 'react-native'
import config from '../config'


export default class ReportScreen extends React.Component {

  constructor(props){
    super(props)
  }


  onCreateReport = (motivo) => {
    const url = `${config.apiUrl}/api/v1/report/`
    var params = new FormData()
    params.append('user','asdasd')
    params.append('thread',this.props.route.params.threadId)
    params.append('motive',motivo)
    
    fetch(url,{
      method:'POST',
      body:params
    })
    .then(res => res.json())
    .then(res => {
        this.props.route.params.navigation.goBack()
        ToastAndroid.show(`Reporte exitoso "${motivo}"`,ToastAndroid.LONG)
    })
    .catch(err => { alert('Error al crear el reporte ...') })
    .catch(err => { alert('Error al crear el reporte ...') })
  }


  render(){
    const data = [
        'Es spam',
        'Contenido grotesco',
        'Fraude',
        'Acoso',
        'Fomento al suicidio',
        'Fomento al terrorismo',
        'Fomeno al odio',
        'Otro'
    ]

    return(
      <View style={styles.container}>
        <Text style={{ fontWeight:'bold',marginTop:5 }}>¿Porque quieres reportar este hilo?</Text>
        <FlatList
          style={{ flex:1,marginTop:30 }}
          keyExtractor={(i,k) => k}
          data={data}
          renderItem={(i) => {
            return(
              <Pressable
                onPress={()=> {
                  this.onCreateReport(i.item)
                }}
              >
                <View style={styles.item}>
                  <Text style={{ fontWeight:'900' }}>{i.item}</Text>
                </View>
                <View style={styles.separator}></View>
              </Pressable>  
            )
          }}
        />
      </View>
    )
  }

}


const styles = StyleSheet.create({
  separator:{
    height:1,
    backgroundColor:'rgba(0,0,0,0.07)'
  },
  item:{
    paddingTop:20,
    paddingBottom:20,
  },
  container:{
    marginTop:35,
    flex:1,
    padding:20,
    backgroundColor:'white',
    borderTopRightRadius:10,
    borderTopStartRadius:10
  }
})






