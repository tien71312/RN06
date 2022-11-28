import { View, Text,Image,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/styles'
//Phải sử dụng memo, callback
export default function Search() {
  return (
    <View>
      <Text style={styles.search_text}>Find Your</Text>
      <Text style={styles.search_text}>Dream Shoes</Text>
      <View style={styles.search}>
        <View style={styles.search_input}>
          <Image style={styles.icon30} source={require('../images/search.png')} />
          <TextInput placeholder='Search Shoes...' /> 
        </View>
        <TouchableOpacity>
          <View style={styles.btn_icon}>
            <Image style={styles.icon30} source={require('../images/searchenter.png')} />
          </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}