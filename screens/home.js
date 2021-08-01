
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import Trends from '../assets/svg/trends'
import Time from '../assets/svg/time'
import TimeLine from '../components/Timeline'
//import CreateThreadScreen from '../screens/createThread'
import settings from '../config'
import FeedThrends from './feedThrends'
import Add from '../assets/svg/add'
//import * as Animatable from 'react-native-animatable';
import AppBar from '../components/appbar/appBar'
import DrawerMenu from '../screens/drawerMenu'
import { createDrawerNavigator } from '@react-navigation/drawer';



function news(props){
  return(
    <View style={{ flex:1,backgroundColor:'#F7F8FA' }}>
      <AppBar navigation={props.navigation} title='New'></AppBar>

      <View style={{ flex:1,marginTop:80 }}>
        <TimeLine
          separator={true}
          navigation={props.navigation}
          url={`${settings.apiUrl}/api/v1/timeline/new/`}
        />
      </View>

    </View>
  )
}


function Indicator(props){
  if(props.focus){
    return(
      <View style={styles.indicator}></View>
    )
  } else { return null }
}



class HomeScreen extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      homeRef:React.createRef()
    }
  }

  render(){
    const Tab = createBottomTabNavigator()
    return(
      <Tab.Navigator
        tabBarOptions={{
          showLabel:false,
          style:{
            backgroundColor:'white',
            borderTopEndRadius:5,
            borderTopLeftRadius:5,
            height:60,
            elevation:0,
            paddingLeft:25,
            paddingRight:25,
            borderTopWidth:0,
            borderTopColor:'white',
            paddingBottom:10
          }
        }}
      >
        <Tab.Screen
          name='home'
          component={FeedThrends}
          options={{
            tabBarIcon:({focused}) => {
              return(
                <View style={styles.tabItem}>
                  <Trends focus={focused}/>
                  <Indicator focus={focused} />
                </View>
              )
            }
          }}
        />


        <Tab.Screen
          name='create'
          component={news}
          options={{
            tabBarIcon:({focused}) => (
              <View style={styles.createBtn}>
                <Add/>
              </View>
            )
          }}
          listeners={{
            tabPress:(e) => {
              e.preventDefault()
              this.props.navigation.navigate('create')
            }
          }}
        />


        <Tab.Screen
          name='news'
          component={news}
          options={{
            tabBarIcon:({focused}) => {
              return (
                <View style={styles.tabItem}>
                  <Time focus={focused}/>
                  <Indicator focus={focused}/>
              </View>
              )
            }
          }}
        />


      </Tab.Navigator>
    )
  }

}



const Drawer = createDrawerNavigator();

export default function Home(props){
  return(
    <Drawer.Navigator
      drawerType={'slide'}
      overlayColor={'rgba(0,0,0,0)'}
      drawerContent={() => <DrawerMenu navigation={props.navigation}/>}
      drawerStyle={{
        backgroundColor:'#fff',
        position:'absolute',
        flex:1
      }}
    >
      <Drawer.Screen name='Home' component={HomeScreen} />
    </Drawer.Navigator>
  )
}



const styles = StyleSheet.create({
  tabItem:{
    width:100,
    alignItems:'center'
  },
  indicator:{
    backgroundColor:'rgba(0,0,0,0.7)',
    width:18,
    height:6,
    borderRadius:100,
  },
  createBtn:{
    height:'100%',
    width:70,
    alignItems:'center',
    justifyContent:'center',
  }
})