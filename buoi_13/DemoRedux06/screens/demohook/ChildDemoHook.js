import { View, Text,TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
//memo giúp tránh Re Render lại giao diện khi giao diện không thay đổi giá trị
//1> Function component không nhận tham số
//2> Function component có nhận tham số nhưng giá trị tham số là function
function ChildDemoHook(props) {
  console.log('Đây là child Demo hook')
  props.tinhTong()
  return (
    <View>
    <Text>{props.name}</Text>
    <TouchableOpacity
      style={{
        padding:10,
        backgroundColor:'red',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center' 
      }}
      onPress={()=>props.tinhTong()}
      >
        <Text style={{color:'white'}}>Button child</Text>
      </TouchableOpacity>      

      <Text>ChildDemoHook</Text>
    </View>
  )
}
export default memo(ChildDemoHook)