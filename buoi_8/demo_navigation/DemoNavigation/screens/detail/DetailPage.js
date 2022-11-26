import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function DetailPage({navigation,route}) {
    _redirectToDetail =()=>{
        // Navigation: Giúp chuyển qua page được chỉ định khai báo ở App.js
        // Push: luôn chuyển page
        // Navigation: nếu như page đã tồn tại thì sẽ không chuyển nữa
        navigation.navigate('detail')
    }
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
        onPress={()=>_redirectToDetail()}
        >
           <Text>{route.params.user}</Text>   
      </TouchableOpacity>
      </View>
  )
}