
import React from 'react'
import config from '../config'
import { View,AsyncStorage } from 'react-native'
import TimeLine from '../components/Timeline'
import SaveThreadBar from '../components/appbar/saveThreadBar'

export default class MyThreads extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      url:null
    }
  }


  componentDidMount(){
    this.getUrl()
  }


  getUrl = async () => {
    AsyncStorage.getItem('myThread')
    this.setState({
      url: `${config.apiUrl}/api/v1/timeline/?list=${await AsyncStorage.getItem('myThread')}`
    })
  }


  render(){
    if(this.state.url != null){
      return(
        <View style={{ flex:1 }}>
          <SaveThreadBar navigation={this.props.navigation}/>
          <TimeLine
            url={this.state.url}
            separator={true}
            navigation={this.props.navigation}
            ads={true}
            isSave={false}
          />
        </View>
      )
    }
    return(null)
  }

}





