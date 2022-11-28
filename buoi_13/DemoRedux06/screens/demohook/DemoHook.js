import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ChildDemoHook from './ChildDemoHook'

//Hook chỉ hoạt động trong func component
export default function DemoHook() {
    //Khi giao diện được render ra lần đầu tiên thì sẽ tới useEffect chạy
    // Khi một biến thay đổi giá trị thì nó sẽ chạy
    // Thực thi logic code
    const [count, setCount]=useState(0)
    let thongbao=''
    if(count==2){
        thongbao='Đây là count 2';
    }
    // useEffect(function,[biến điều kiện để gọi lại]) 
    // biến count thay đổi giá trị từ 0 lên 1 thì useEffect sẽ được gọi lại  
    useEffect(()=>{
        //Logic code
        console.log('use Effect')
    },[thongbao]) // [thamso1,thamso2] sẽ là điều kiện và
   
    //Function không có giá trị trả về: useCallBack
    //Function có giá trị trả về : useMemo
    const tinhTong=()=>{
      console.log('Func tính tổng')
    }
    const callBackTinhTong=useCallback(tinhTong,[])
    const tinhTong1=()=>{
      let i=0
      while(i<100){
        i++
      }
      console.log('Đây là tính tổng 1')
      return i
    }
    const memoTinhTong1=useMemo(()=>tinhTong1(),[])
    console.log('Render demo hook')
  return (
    <View>
      <Text>{memoTinhTong1}</Text>
      <Text>DemoHook</Text>
      <TouchableOpacity
      style={{
        padding:10,
        backgroundColor:'blue',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center' 
      }}
      onPress={()=>setCount(count + 1)}
      >
        <Text style={{color:'white'}}>Count +</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{
        padding:10,
        backgroundColor:'green',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'


      }}
      >
        <Text style={{color:'white'}}>Count -</Text>
      </TouchableOpacity>
      <ChildDemoHook name={thongbao} tinhTong={callBackTinhTong}/>
    </View>
  )
}