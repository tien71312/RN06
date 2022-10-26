import { View, Text,Image,FlatList } from 'react-native'
import React from 'react'
import styles from '../styles/styles'

export default function AvatarBar(props) {
    const dataAvatar = [
        {
            name: 'Wanda',
            image: require('../../../assets/images/btzalo/wanda.jpg'),
        },
        {
            name: 'Yasuo',
            image: require('../../../assets/images/btzalo/yasuo.jpg'),
        },
        {
            name: 'Captain',
            image: require('../../../assets/images/btzalo/captain.jpg'),
        },
        {
            name: 'Flash',
            image: require('../../../assets/images/btzalo/flash.jpg'),
        },
        {
            name: 'Ironman',
            image: require('../../../assets/images/btzalo/ironman.jpeg'),
        },
        {
            name: 'Black widow',
            image: require('../../../assets/images/btzalo/blackwidow.jpeg'),
        },
        {
            name: 'Spider man',
            image: require('../../../assets/images/btzalo/spiderman.jpeg'),
        }, 
        {
            name: 'Strange',
            image: require('../../../assets/images/btzalo/strange.jpg'),
        },       
        {
            name: 'Supper girl',
            image: require('../../../assets/images/btzalo/suppergirl.jpg'),
        },       
        {
            name: 'Wonder woman',
            image: require('../../../assets/images/btzalo/wonderwoman.jpg'),
        },             
    ]

    _renderItemAvatar=(data)=>{ 
        return <View style={styles.header__listavatar__item} >
                    <Image style={styles.header__listavatar__item_img} source={data.item.image} />
                    <Text style={styles.header__listavatar__item_text}> {data.item.name}</Text>
                </View>
    }

  return (
    <View style={styles.header}>
        <View style={{flexDirection:'row'}}>
            <Image style={styles.icon} source={require("../../../assets/images/history.png")} />
            <Text style={styles.header__title}>{props.title}</Text> 
        </View>

        <View style={styles.header__listavatar}>
            {/* {dataAvatar.map((data,index)=>{
                return <View key={index} style={styles.listavatar__item} >
                            <Image style={styles.listavatar__item_img} source={data.image} />
                            <Text style={styles.listavatar__item_text}> {data.name}</Text>
                        </View>
            })} */}
          <FlatList 
             horizontal // cuộn ngang
            data={dataAvatar}
            renderItem={(data)=>_renderItemAvatar(data)}
            keyExtractor={(data, index) => index.toString()}  
            />              
        </View>

    </View>
  )
}