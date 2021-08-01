
import React from 'react'
import { View,StyleSheet,Text,StatusBar } from 'react-native'
import SearchBar from '../components/appbar/searchBar'
import config from '../config'
import TimeLine from '../components/Timeline'


export default class SearchScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      query:''
    }
  }
  
  onChange = (text) => {
    this.setState({
      query:text
    })
  }


  render(){
    var timeLine = null

    if(this.props.route.params != undefined){
      if(this.props.route.params.search){
        timeLine = (
          <TimeLine
            url={this.props.route.params.url}
            ads={true}
            navigation={this.props.navigation}
            separator={true}
          />
        )
      }
    }

    return(
      <View style={styles.container}>
        <SearchBar
          onSearch={(text) => {
            if(text!=""){
              this.props.navigation.navigate({
                name:'Search',
                key:Math.random(),
                params:{
                  url:`${config.apiUrl}/api/v1/search/?q=${text}`,
                  search:true
                }
              })
            }
          }}
          navigation={this.props.navigation}
        />
        {timeLine}
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F7F8FA'
  }
})



