import { Text, TouchableOpacity, View,  TextInput} from 'react-native'
import React, { Component } from 'react'

export default class HomePage extends Component {
    _redirectToDetail =()=>{
        // Navigation: Giúp chuyển qua page được chỉ định khai báo ở App.js
        // navigation('tên stack', thamso)
        this.props.navigation.navigate('detail',{user:'Hello',pass:'123456'})
    }
    soA=0
    soB=0

  render() {
    return (
      <View style={{
        justifyContent:"center",
        alignItems:"center",
        flex:1
      }}> 
      <TouchableOpacity style={{
        backgroundColor:"green",
        padding:16,
        width:150,
        }}
        onPress={()=>this._redirectToDetail()}
        >
            <TextInput placeholder='soA' onChangeText={(value)=>{this.soA=value}}></TextInput>
            <TextInput placeholder='soB' onChangeText={(value)=>{this.soB=value}}></TextInput>
           <Text>HomePage</Text> 
      </TouchableOpacity>
      </View>
    ) 
  }
}