

import * as React from 'react';
import { Text,StyleSheet } from 'react-native';



onPressTag = (navigation,tagName) => {
  console.log(navigation)
  navigation.navigate({
    name:'TagScreen',
    params:{
      tag:tagName,
      navigation:navigation
    }
  })
}

export default TextView = (props) => {
  const prepareText = (text) => {
    const result = [];
    let mentList = props.children.match(/[#][a-z0-9_\.]+/gi);
    
    if (mentList == null) { return [text]; }

    for (const ment of mentList) {
      result.push(text.substring(0, text.indexOf(ment)));
      result.push(
        <Text key={Math.random() * Math.random()} onPress={() => { onPressTag(props.navigation,ment) }} style={styles.tag}>{ment}</Text>
      );
      text = text.substring(text.indexOf(ment) + ment.length, text.length);
    }
    if (text.length > 0) {
      result.push(text);
    }
    return result;
  };
  return (
    <Text
      style={props.style}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
    >
      {prepareText(
        props.children,
        props.mentionHashtagPress,
        props.mentionHashtagColor
      )}
    </Text>
  );
};




const styles = StyleSheet.create({
  tag:{
    color:'#000',
    fontWeight:'bold'
  }
})


