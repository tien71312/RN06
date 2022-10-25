
import { View, Text, Image, ScrollView, FlatList, SectionList } from 'react-native'
import React from 'react'
import styles from './styles/styles'
import AppBar from './component/AppBar'
//Function component : là một hàm có giá trị trả về là một giao diện
//Không khởi tạo được state.
//hook
export default function NewFeed() {
    //Xử lý logic code

//   let listData = [
//     15,2,3,4,5,6,7,8,9,10,11,12,13
//   ]
    let dataListSections = [
        {
            title: "A",
            data: [
                {
                    title:"Vladimir Putin",
                    desc:"President Russia",
                    image:require("../../assets/images/putin.jpeg")
                },
                {
                    title:"Mark Zuckerberg",
                    desc:"Microsoft Company",
                    image:require("../../assets/images/mark.jpeg")
                },
                {
                    title:"Joe Biden",
                    desc:"President American",
                    image:require("../../assets/images/joe_biden.jpeg")
                }
            ]
        },
        {
            title: "B",
            data: [
                {
                    title:"Joe Belfiore",
                    desc:"Microsoft Company",
                    image:require("../../assets/images/joe_belfiore.webp")
                }
            ]
        },
        {
            title: "C",
            data: [
                {
                    title:"Elon musk",
                    desc:"Tesla Company",
                    image:require("../../assets/images/elon_musk.jpeg")
                },
                {
                    title:"Jeff Bezos",
                    desc:"Amazon Company",
                    image:require("../../assets/images/jeff.jpeg")
                }
            ]
        },
        {
            title: "D",
            data: [
                {
                    title:"Bill Gates",
                    desc:"Microsoft Company",
                    image:require("../../assets/images/billgates.jpeg")
                }
            ]
        },
    ] 

//   _renderItem = (data) => {
//     return <Text style={{height:150}}>{data.item}</Text>
//   }

  _renderHeaderItem = (data) => {
    return <Text style={{
        color:"blue",
        fontSize: 16,
        fontWeight: "500",
        marginTop:16,
        marginLeft: 16,
        marginRight: 16
        }}>{data.section.title}</Text>
  }

  _renderItemSectionList = (data) => {
    return <Text>{data.item}</Text>
  }

  _renderItem = (data,index) => {
    return <View style={styles.item} key={index}>
             <Image style={styles.item__img} source={data.item.image} />
             <View style={styles.item__body}>
                <Text style={styles.item__body__title}>{data.item.title}</Text>
                <Text style={styles.item__body__desc}>{data.item.desc}</Text>
             </View>
           </View>
  }

  return (
    <View style={styles.container}>
      <AppBar title="New Feed"/>
      {/* <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Text>
            Ngân sách năm 2023 chi bao nhiêu cho cải cách, tăng lương?
        </Text>
      </ScrollView> */}
      {/* <FlatList 
        data={listData} //bắt buộc và phải là một mảng giá trị
        renderItem={(data)=> _renderItem(data)} //Bắt buộc trả ra giao diện của từng phần tử đã duyệt trong mảng
        keyExtractor={(data)=> data.toString() }
      /> */}

      <SectionList 
        sections={dataListSections} //Nhận vào dữ liệu
        renderSectionHeader={(data)=> _renderHeaderItem(data)} //Trả ra giao diện cho Header
        renderItem={(data)=> _renderItem(data)} //Trả ra giao diện cho thành phần con trong header
      />
    </View>
  )
}