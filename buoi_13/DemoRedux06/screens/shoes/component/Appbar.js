import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import styles from '../styles/styles'

 function Appbar() {
  return (
    <View style={styles.appbar}>
      <TouchableOpacity>
        <View style={styles.btn_icon}><View style={{marginLeft:5}}><Image style={styles.icon} source={require('../images/back.png')} /></View></View>
      </TouchableOpacity>
      <View><Image style={styles.avatar} source={require('../images/avatar.jpg')} /></View>
    </View>
  )
}
export default memo(Appbar)