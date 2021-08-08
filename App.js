
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateThreadScreen from './screens/createThread'
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


class App extends React.Component {
  
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


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-end',
    backgroundColor:'#F5F5F8'
  }
})


export default App


