import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { giamCount, tangCount } from './Action'

export default function DemoFuncRedux() {
    let count = useSelector((state)=>state.count) // lấy state trên store dùng chung
    //let tenbien= useSelector((state)=>state.name)
    let dispatch = useDispatch() // giúp thực thi action đã đăng ký ở Redux
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>{count}</Text>
    <TouchableOpacity
        onPress={()=>dispatch(tangCount())}
    >
         <Text>Tăng biến count</Text>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={()=>dispatch(giamCount())}
    >
         <Text>Giảm biến count</Text>
    </TouchableOpacity>
  </View>
  )
}