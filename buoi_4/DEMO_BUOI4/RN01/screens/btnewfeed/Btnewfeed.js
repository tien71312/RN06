import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './styles/styles'
import AppBar from './component/AppBar'

export default function Btnewfeed() {
    const dataAvatar = [
        {
            name: 'Sahara',
            image: require('../../assets/images/btnewfeed/image1.jpeg'),
        },
        {
            name: 'Sophia',
            image: require('../../assets/images/btnewfeed/image2.jpeg'),
        },
        {
            name: 'Hana',
            image: require('../../assets/images/btnewfeed/image3.jpeg'),
        },
        {
            name: 'Naul',
            image: require('../../assets/images/btnewfeed/image4.jpeg'),
        },
        {
            name: 'Kimihana',
            image: require('../../assets/images/btnewfeed/image5.jpeg'),
        },
        {
            name: 'Yoko',
            image: require('../../assets/images/btnewfeed/image6.jpeg'),
        },
        {
            name: 'Su',
            image: require('../../assets/images/btnewfeed/image7.jpeg'),
        },
        {
            name: 'Finnia',
            image: require('../../assets/images/btnewfeed/image8.jpeg'),
        },
        {
            name: 'Subana',
            image: require('../../assets/images/btnewfeed/image9.jpeg'),
        },
        {
            name: 'Corohe',
            image: require('../../assets/images/btnewfeed/image10.jpeg'),
        }
    ]



  return (
    <View style={styles.container}>
      <AppBar title='Feed'/>
      <View style={styles.listavatar}>
        {dataAvatar.map((data,index)=>{
            return <View key={index} style={styles.listavatar__item} >
                        <Image style={styles.listavatar__item_img} source={data.image} />
                         <Text style={styles.listavatar__item_text}> {data.name}</Text>
                    </View>
        })}
      </View>

    </View>
  )
}