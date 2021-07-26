
import React from 'react';
import { Text,View,Pressable,StyleSheet,StatusBar,FlatList, Image } from 'react-native';
import config from '../config'
import ReactionListPreview from './reactionListPreview'
import Modal from 'react-native-modal';
import { UIActivityIndicator } from 'react-native-indicators';
import ReactionIconSvg from '../assets/svg/reaction'


class ReactionContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      reactions:[],
      isClick:false,
      showReaction:false
    }
  }

  createReaction = (url,reaction) => {
    var params = new FormData()
    params.append('reaction',reaction)

    fetch(url,{
      body:params,
      method:'POST'
    })
      .then(res => res.json())
      .then(res => {})

      .catch(res => {
        console.error('API SERVER ERROR')
      })
      .catch(res =>{
        console.error('COnect error')
      })
  }

  getApiData = () => {
    var url = `${config.apiUrl}/api/v1/reactions/`
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          reactions:res.data
        })
      })

      .catch(err => {
        console.error('Api errro')
      })
      .catch(err => {
        console.log('Server error')
      })
  }


  onCloseModal = () => {
    this.setState({
      isVisible:false
    })
  }


  onShow = () => {
    this.getApiData()
  }


  addReaction = (reaction) => {
    var recName = reaction.image.split('/')
    recName= recName[recName.length - 1]
    var url = `media/reactions/${recName}`
    var reactionList = this.props.data.reactionsPreview.preview

    reactionList.push({
      name:'',
      url:url
    })
  }

  onCreateReaction = (reaction) => {
    var url = `${config.apiUrl}/api/v1/reactions/${this.props.data.id}/`

    this.onCloseModal()
    this.setState({isClick:true})
    this.createReaction(url,reaction.name)

    if(this.state.isClick){
      var size = this.props.data.reactionsPreview.preview.length - 1
      this.props.data.reactionsPreview.preview.splice(size,1)
      this.addReaction(reaction)
    } else {
      if(this.props.data.reactionsPreview.preview.length <= 6){
        this.addReaction(reaction)
      }
    } 
    if(this.props.data.reactionsPreview.preview.length > 0){
      this.setState({
        showReaction:true
      })
    }
  }


  renderItem = ({item}) => (
    <Pressable
      onPress={() => {
        this.onCreateReaction(item)
      }}
    >
      <View style={styles.reactionItem}>
        <Image
          style={{ flex:1,borderRadius:5 }}
          resizeMode={'contain'}
          source={{ uri:`${config.apiUrl}${item.image}` }}
        />
        <Text style={{ textAlign:'center',fontSize:12,fontWeight:'bold',marginTop:5,color:'rgba(0,0,0,0.8)' }}>{item.name}</Text>
      </View>
    </Pressable>
  )


  render(){
    var modal = null
    var displayLoader = <ReactionIconSvg/>
    var content = <UIActivityIndicator color='#c2c2c2' />
  
    if(this.props.data.reactionsPreview != undefined){
      if(this.props.data.reactionsPreview.length > 0 || this.state.showReaction){
        displayLoader = (
          <View style={styles.reactionItemContainer}>
            <ReactionListPreview data={this.props.data} />
            <Text style={{fontSize:11.5,opacity:0.6,paddingRight:8}}>1</Text>
          </View>
        )
      }
    }

    
    if(this.state.reactions.length > 0){
      content = (
        <FlatList
          numColumns={3}
          columnWrapperStyle={{ flex:1,justifyContent:'center' }}
          style={{ flex:1,width:'100%',height:'100%' }}
          data={this.state.reactions}
          keyExtractor={(item, index) => index}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
        />
      )
    }

    if (this.state.isVisible){
      modal = (
        <Modal
          backdropOpacity={0.4}
          isVisible={true}
          swipeDirection={'down'}
          onShow={this.onShow}
          propagateSwipe={true}
          style={{ margin:0 }}
          onSwipeComplete={this.onCloseModal}
          onBackButtonPress={this.onCloseModal}
          onBackdropPress={this.onCloseModal}
        >

          <StatusBar backgroundColor='rgba(0,0,0,0.4)' />
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <View style={styles.indicator}></View>
            </View>
            {content}
          </View>

        </Modal>
      )
    }

    return(
      <View>
        <Pressable
          onPress={() => {
            this.setState({
              isVisible:true
            })
          }}
        >
          {displayLoader}
        </Pressable>
        { modal }
      </View>
    )
  }

}



const styles = StyleSheet.create({
  reactionItemContainer:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.035)',
    paddingRight:3.5,
    paddingLeft:3.5,
    paddingTop:2,
    paddingBottom:2,
    borderRadius:10
  },
  reactionItem:{
    width:80,
    height:85,
    marginBottom:20,
    marginRight:20,
    borderRadius:5,
  },
  indicator:{
    width:50,
    height:6,
    borderRadius:100,
    backgroundColor:'rgba(0,0,0,0.099)'
  },
  modalHeader:{
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderTopRightRadius:10,
    borderTopLeftRadius:10
  },
  modalContainer:{
    backgroundColor:'white',
    position:'absolute',
    width:'100%',
    bottom:0,
    height:500,
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  }
})


export default ReactionContainer


