

import React from 'react';
import { StyleSheet,View } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';


export default class AdsBanner extends React.Component {

  render(){
    return(
      <View style={styles.bannerContainer}>
        <AdMobBanner
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds={false} // true or false
          //onDidFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  bannerContainer:{
    justifyContent:'center',
    width:'100%',
    height:100,
    marginBottom:18,
  }
})



