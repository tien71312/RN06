import { View, Text, Image, ScrollView, FlatList, SectionList } from 'react-native'
import React from 'react'
import styles from './styles/styles'
import AppBar from './component/AppBar'

//Function component: là một hàm có giá trị trả về là một giao diện
//Không khởi tạo được state
//hook 

export default function Newfeed() {
// let listData = [
//     1,2,3,4,5,6,7,8,9,10
// ]

let dataListSections=[
    {
        title:'A',
        data: [
            'Nguyễn Văn A',
            'Nguyễn Hữu Ánh',
            'Lê thị An'
        ]
    },
    {
        title:'B',
        data: [
            'Nguyễn Văn B',
            'Nguyễn Hữu Bình',
            'Lê thị Bính'
        ]
    },
    {
        title:'C',
        data: [
            'Nguyễn Văn C',
            'Nguyễn Hữu Chanh',
            'Lê thị Chảnh'
        ]
    }
]

_renderItem= (data)=>{
    return <Text style={{height:150}}>{data.item}</Text>
}
_renderHeaderItem=(data) => {
   // console.log(data)
    return <Text>{data.section.title}</Text>
}
_renderItemList= (data)=> {
    //console.log(data)
    return <Text>{data.item}</Text>
}



  return (
    <View style={styles.container}>
    <AppBar title='New Feed' />
    {/* <ScrollView horizontal={false} showsVerticalScrollIndicator={true}>
        <Text>bla bla....</Text>
    </ScrollView>
   */}
    {/* <FlatList 
        data={listData} // bắt buộc phải là một giá trị mảng
        renderItem={(data)=>_renderItem(data)} // bắt buộc trả ra giao diện
        keyExtractor={(data)=>data.toString()} 
    /> */}
    <SectionList 
        sections={dataListSections} //nhận vào dữ liệu
        renderSectionHeader={(data)=>_renderHeaderItem(data)} //trả ra giao diện cho Header
        renderItem={(data)=>_renderItemList(data)} // trả ra giao diện cho thành phần con trong header
    
    />


    </View>
  )
}