import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import styles from './styles/styles'
import AppBar from './component/AppBar'

//Function component: là một hàm có giá trị trả về là một giao diện
//Không khởi tạo được state
//hook 

export default function Newfeed() {
let listData = [
    1,2,3,4,5,6,7,8,9,10
]
_renderItem= (data)=>{
    return <Text style={{height:150}}>{data.item}</Text>
}
  return (
    <View style={styles.container}>
    <AppBar title='New Feed' />
    {/* <ScrollView horizontal={false} showsVerticalScrollIndicator={true}>
        <Text>bla bla....</Text>
    </ScrollView>
   */}
    <FlatList 
        data={listData} // bắt buộc phải là một giá trị mảng
        renderItem={(data)=>_renderItem(data)} // bắt buộc trả ra giao diện
        keyExtractor={(data)=>data.toString()}
       

    />
    </View>
  )
}