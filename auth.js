

import { AsyncStorage } from 'react-native';



async function getLocalToken(callback) {
  try {

    const token = await AsyncStorage.getItem('token')
    if (token != null){ callback(token) } else { callback(null) }

  } catch (error){
    callback(null)
  }
}



async function setLocalToken(token){
  try {
    await AsyncStorage.setItem('token',token);
  } catch (error) { alert('Fail to save token ...') }
}



module.exports = {
  getLocalToken,
  setLocalToken
}


