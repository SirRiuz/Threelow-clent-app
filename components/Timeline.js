
import React from 'react';
import { View,RefreshControl } from 'react-native';
import config from '../config'
import { RecyclerListView,DataProvider,LayoutProvider } from 'recyclerlistview';
import { PacmanIndicator } from 'react-native-indicators'
import { Dimensions } from 'react-native';
import HeaderItem from '../components/itens/headerItem'
import AdsBanner from '../components/adsBanner'
import { getLocalToken } from '../auth'
import ThreadContainer from '../components/thread/threadContainer'


class TimeLine extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      threads:[],
      next:false,
      dataProvider:new DataProvider((r1,r2) => r1 !== r2),
      token:''
    }


    this.layoutProvider = new LayoutProvider(
      (_) => 0,
      (_,dim) => {
        dim.width = Dimensions.get('window').width,
        dim.height = Dimensions.get('window').height
      }
    ) 
  }


  callApi(url,token) {
    fetch(url,{
      headers:{
        'token':token
      }
    })
      .then(res => {
        if(res.status == 500){
          alert('500 ERROR')
        }
        return res.json()
      })
      .then(res => {
        if(res.status == 'error'){
          if(this.props.onError != undefined){
            this.props.onError(res['type-error'])
          }
        }
        if(res.next == null){  
          if(res.results.length == 0){
            this.setState({
              next:'end'
            })
          }

          this.setState({
            threads:this.state.threads.concat(res.results),
            next:'end'
          })
        } else {

          if(this.props.ads){
            this.setState({
              threads:this.state.threads.concat(res.results.concat({ type:'ads' })),
              next:res.next
            })
          } else {
            this.setState({
              threads:this.state.threads.concat(res.results),
              next:res.next
            })
          }

        }
        this.setState({
          dataProvider:this.state.dataProvider.cloneWithRows(this.state.threads)
        })
      })
      .catch(err => {
        this.setState({
          next:'end'
        })
      })
      .catch(err =>{
        this.setState({
          next:'end'
        })
      })
  }

  onFetch() {
    if(this.state.next){
      if(this.state.next != 'end'){
        getLocalToken(token =>{
          this.callApi(this.state.next,token)
        })
      }
    } else {
      getLocalToken(token => {
        this.callApi(this.props.url,token)
      })
    }
  }
  
  componentDidMount(){
    getLocalToken(token => {
      this.setState({ token:token })
    })

    if(this.props.headerData != undefined){
      this.setState({
       threads:[].concat(this.props.headerData),
       dataProvider:this.state.dataProvider.cloneWithRows([].concat(this.props.headerData))
      })
    } else {
      this.onFetch()
    }
  }


  onRenderRow = (_,data) => {
    if(data.type == 'ads'){
      return <AdsBanner/>
    }

    if(data.type == 'header'){
      if(this.props.threadOpData != undefined){
        this.props.threadOpData(data)
      }
      return <HeaderItem navigation={this.props.navigation} data={data}/>
    }

    return (
      <View style={{ flex:1 }}>
        <ThreadContainer
         data={data}
         navigation={this.props.navigation}
         separator={this.props.separator}
         isViewThread={this.props.isViewThread}
         isSave={this.props.isSave}
         />
      </View>
    )
  }


  onPagination = () => {
    this.onFetch()
  }


  onRefresh = () => {
    this.setState({
      next:false,
      threads:[],
    },() => {
      if(this.props.headerData != undefined){
        this.setState({
          threads:[].concat(this.props.headerData),
          dataProvider:this.state.dataProvider.cloneWithRows([].concat(this.props.headerData))
        })
      } else {
        this.onFetch()
      }
    })
  }


  onScroll = (e,x,y) => { 
    if(this.props.onScroll != undefined){
      this.props.onScroll(y)
    }
  }


  renderFooter = () => {
    if(this.state.next == 'end'){ return null }
    return <PacmanIndicator color='#d4d4d4' />
  }

  render(){
    if(this.state.threads.length > 0){
      return(
        <View style={{ flex:1,backgroundColor:'#F7F8FA' }}>
          <RecyclerListView
            style={{ flex:1 }}
            onScroll={this.onScroll}
            onEndReached={this.onPagination}
            disableRecycling={false}
            onEndReachedThreshold={1}
            layoutProvider={this.layoutProvider}
            dataProvider={this.state.dataProvider}
            rowRenderer={this.onRenderRow}
            showsVerticalScrollIndicator={false}
            optimizeForInsertDeleteAnimations={true}
            forceNonDeterministicRendering={true}
            renderFooter={this.renderFooter}
            scrollViewProps={{
              refreshControl:(
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh}
                />
              )
            }}
          />
        </View>
      )
    } else {

      if(this.state.next == 'end'){ return null }

      return (
        <View style={{ flex:1,backgroundColor:'#F7F8FA' }}>
          <PacmanIndicator color='#d4d4d4' />
        </View>
      )
    }
  }

}



export default TimeLine





