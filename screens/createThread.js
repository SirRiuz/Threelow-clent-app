
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View,StyleSheet,TextInput,TouchableNativeFeedback,ScrollView,AsyncStorage } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImagePreview from '../components/createThread/imagePreview'
import Media from '../assets/svg/uploadMedia'
import AppBarCreateThread from '../components/appbar/createThread'
import * as Font from 'expo-font';
import { UIActivityIndicator } from 'react-native-indicators';




export default class CreateThreadScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      media:[],
      text:'',
      isLoadFont:false
    }
  }

  async loadFont () {
    await Font.loadAsync({
      'Cerebri-Sans-Book':require('../assets/fonts/Cerebri-Sans-Book.ttf')
    })
    this.setState({isLoadFont:true})
  }


  componentDidMount() {
    this.loadFont()
  }


  requestFiles = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(result.granted){
      var resultFiles = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.All,
      })
      if(!resultFiles.cancelled){
        this.setState({
          media:this.state.media.concat(resultFiles)
       })
       console.log(media)
      }
    } else{
        alert('Acceso denegado')
    }
  }

  onChange = (e) => {
    this.setState({
      text:e.nativeEvent.text
    })
  }

  render(){
    var imgPreview = null
    if (this.state.media.length >0){
      var itemImg = this.state.media.map((i,x) => {
        return (
          <ImagePreview uri={i.uri} key={x}/>
        )
      })
      imgPreview = (
        <View style={styles.imagePreview}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            {itemImg}
          </ScrollView>
        </View>
      )
    }


    var responseMode = false
    var id = ''
    if(this.props.route.params != undefined){
      if(this.props.route.params.response){
        responseMode = true
        id = this.props.route.params.id
      }
    }

    if(!this.state.isLoadFont) {
      return <UIActivityIndicator color='#c2c2c2'/>
    }

    return(
      <View style={styles.container}>
        <AppBarCreateThread
          response={responseMode}
          data={{ ...this.state,threadId:id }} 
          navigation={this.props.navigation}
        />
        <StatusBar translucent={true}/>
        <TextInput
          onChange={this.onChange}
          style={{
            fontSize:19.5,
            padding:20,
            marginTop:10,
            marginBottom:20,
            fontFamily:'Cerebri-Sans-Book'
          }}
          maxLength={400}
          multiline={true}
          autoFocus={true}
          selectionColor={'rgba(0,0,0,0.0)'}
          placeholderTextColor='rgba(0,0,0,0.50)'
          placeholder='¿En que estas pensando?'
        />

        {imgPreview}
        <View style={styles.footer}>
          <View style={styles.bottomNav}>
              <TouchableNativeFeedback
                onPress={this.requestFiles}
              >
                <Media/>
              </TouchableNativeFeedback>
          </View>  
        </View>

      </View>
    )
  }
}



const styles = StyleSheet.create({
  footer:{
    position:'absolute',
    bottom:0,
    width:'100%'
  },
  imagePreview:{
    marginBottom:10,
    flexDirection:'row',
    alignItems:'center',
  },
  bottomNav:{
    backgroundColor:'#fff',
    borderTopWidth:2,
    borderTopColor:'rgba(0,0,0,0.04)',
    height:65,
    justifyContent:'center',
    paddingLeft:20
  },
  container:{
    flex:1,
    backgroundColor:'white',
  }
})
