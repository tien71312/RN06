import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { giamCount, tangCount } from './DemoReduxSlices'
import { getProduct } from './DemoReduxToolkitThunk'

export default function DemoFuncReduxToolkit() { 
    const count = useSelector((state)=>state.demoReduxReducer.count)
    console.log(count)
    const dispatch = useDispatch()
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>{count}</Text>
    <TouchableOpacity
        onPress={()=>dispatch(tangCount({title:'tiêu đề',des:'mô tả'}))}
    >
         <Text>Tăng biến count</Text>
    </TouchableOpacity>
    <TouchableOpacity
        onPress={()=>dispatch(getProduct('Tham số'))}
    >
         <Text>Giảm biến count</Text>
    </TouchableOpacity>
  </View>
  )
}