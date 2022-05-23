
import React from 'react';
import { StyleSheet, Text, View,StatusBar,AsyncStorage } from 'react-native';
import CreateThreadScreen from './screens/createThread'
import { PacmanIndicator } from 'react-native-indicators'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home'
import FilePreview from './screens/filePreview'
import ViewThread from './screens/viewThread'
import TagScreen from './screens/hashTag'
import ReportScreen from './screens/report'
import SearchScreen from './screens/search'
import SaveThread from './screens/saveThread'
import MyThreads from './screens/myThreads'
import ThreadInfo from './screens/threadInfo'
import config from './config';
import { getLocalToken,setLocalToken } from './auth'
import encode from './encoder';


function RootStackScreens(){
  const MainStack = createStackNavigator();
  return(
    <MainStack.Navigator
      screenOptions={{headerShown:false}}
    >
      <MainStack.Screen name='Home' component={Home}/>
      <MainStack.Screen options={{ animationEnabled:false }} name='MyThreads' component={MyThreads} />
      <MainStack.Screen options={{ animationEnabled:false }} name='SaveThread' component={SaveThread} />
      <MainStack.Screen options={{ animationEnabled:false }} name='Search' component={SearchScreen}/>
      <MainStack.Screen options={{ animationEnabled:false }} name='TagScreen' component={TagScreen} />
      <MainStack.Screen options={{ animationEnabled:false }} name='ViewThreadScreen' component={ViewThread} />
    </MainStack.Navigator>
  )
}


class MainApp extends React.Component {
  
  render(){
    const RootStack = createStackNavigator();
    //return <Text>Hello</Text>
    return(
      <NavigationContainer>
        <RootStack.Navigator mode={'modal'} headerMode="none">

          <RootStack.Screen name="Main" component={RootStackScreens} />
          <RootStack.Screen name='create' component={CreateThreadScreen} />
          <RootStack.Screen name='ThreadInfo' component={ThreadInfo} />
          <RootStack.Screen name='FilePreview' component={FilePreview} />
          <RootStack.Screen options={{ animationEnabled:false }} name='Report' component={ReportScreen} />
          
        </RootStack.Navigator>
      </NavigationContainer>
    )
  }
}


class App extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      continue:false
    }
  }

  componentDidMount(){
    this.onAuthClient()
  }



  onAuthClient = () => {

    var params = new FormData()
    params.append('clientVersion',encode(config.version))
    params.append('secretKey',encode(config.clientToken))

    fetch(`${config.apiUrl}api/v1/auth/`,{
      method:'POST',
      body:params
    })
    
      .then(res => res.json())
      .then(res =>{
        if(res.status == 'ok'){
          //console.log('Generando nuevo token '+res.token)
          setLocalToken(res.token)
          this.setState({ continue:true })
        }
      })

      .catch(err => {  })
      .catch(err => {  })
  }



  render(){
    if(this.state.continue){
      return <MainApp/>
    }
    return(
      <View style={styles.loader}>
        <StatusBar barStyle={'light-content'} backgroundColor={'white'} />
        <PacmanIndicator color='#d4d4d4'/>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  loader:{
    flex:1,
  },
  container:{
    flex:1,
    justifyContent:'flex-end',
    backgroundColor:'#F5F5F8'
  }
})


export default App


