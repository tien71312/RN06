import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import styles from '../styles/styles'
import { useNavigation } from '@react-navigation/native'

 function Appbardetail() {
    const navigation = useNavigation()
  return (
    <View style={styles.appbar}>
      <TouchableOpacity
      onPress={()=> navigation.push('home')}
      >
        <View style={styles.btn_icon}><View style={{marginLeft:5}}><Image style={styles.icon} source={require('../images/back.png')} /></View></View>
      </TouchableOpacity>
      <TouchableOpacity>
         <View style={styles.btn_icon}><Image style={styles.icon} source={require('../images/basket.png')} /></View> 
      </TouchableOpacity>
    </View>
  )
}
export default memo(Appbardetail)