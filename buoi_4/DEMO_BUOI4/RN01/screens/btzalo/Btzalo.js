import { View, Text,Image,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import AvatarBar from './component/AvatarBar'
import styles from './styles/styles'

export default function Btzalo() {
    const dataFriend = [
        {
            name: 'Wanda',
            image: require('../../assets/images/btzalo/wanda.jpg'),
            friends: '15 bạn chung'
        },
        {
            name: 'Yasuo',
            image: require('../../assets/images/btzalo/yasuo.jpg'),
            friends: '26 bạn chung'
        },
        {
            name: 'Captain',
            image: require('../../assets/images/btzalo/captain.jpg'),
            friends: '21 bạn chung'
        },
        {
            name: 'Flash',
            image: require('../../assets/images/btzalo/flash.jpg'),
            friends: '5 bạn chung'
        },
        {
            name: 'Ironman',
            image: require('../../assets/images/btzalo/ironman.jpeg'),
            friends: '20 bạn chung'
        },
        {
            name: 'Black widow',
            image: require('../../assets/images/btzalo/blackwidow.jpeg'),
            friends: '9 bạn chung'
        },
        {
            name: 'Spider man',
            image: require('../../assets/images/btzalo/spiderman.jpeg'),
            friends: '7 bạn chung'
        }, 
        {
            name: 'Strange',
            image: require('../../assets/images/btzalo/strange.jpg'),
            friends: '11 bạn chung'
        },       
        {
            name: 'Supper girl',
            image: require('../../assets/images/btzalo/suppergirl.jpg'),
            friends: '12 bạn chung'
        },       
        {
            name: 'Wonder woman',
            image: require('../../assets/images/btzalo/wonderwoman.jpg'),
            friends: '10 bạn chung'
        },             
    ]


    _renderItemFriend=(data)=>{ 
        return <View style={styles.ketban__listavatar} >
        <View style={styles.ketban__listavatar_profile}>
             <Image style={styles.ketban__listavatar__item_img} source={data.item.image} />
             <View style={styles.ketban__listavatar__item_text}>
                 <Text style={styles.ketban__listavatar__item_name}> {data.item.name}</Text>
                 <Text style={styles.ketban__listavatar__item_friend}> {data.item.friends}</Text>
             </View>
        </View>
         <View style={styles.ketban_btn}> 
             <TouchableOpacity style={[styles.btn, styles.btn_primary]} onPress={()=>{
                 console.log('Đã gửi kết bạn')
             }} >
                  <Text style={styles.btn__text_black}>Kết bạn</Text>
             </TouchableOpacity>  
         </View>

     </View> 
    }


  return (
    <View style={styles.container}>
      <AvatarBar title='Danh sách tìm kiếm gần đây'/>
      <View style={styles.ketban}>
            <View style={styles.ketban_title}>
                <Image style={styles.icon} source={require("../../assets/images/addfriend.png")} />
                <Text style={styles.header__title}>Gợi ý kết bạn</Text> 
            </View>

            <View style={styles.header__listavatar}>
            {/* {dataAvatar.map((data,index)=>{
                return <View key={index} style={styles.listavatar__item} >
                            <Image style={styles.listavatar__item_img} source={data.image} />
                            <Text style={styles.listavatar__item_text}> {data.name}</Text>
                        </View>
            })} */}
          <FlatList  
            data={dataFriend}
            renderItem={(data)=>_renderItemFriend(data)}
            keyExtractor={(data, index) => index.toString()}  
            />    
        </View>

                

      </View>
    </View>
  )
}