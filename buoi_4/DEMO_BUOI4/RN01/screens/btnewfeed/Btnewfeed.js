import { View, Text,Image, FlatList } from 'react-native'
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

    const dataFeeds = [
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Sahara",
            image: require('../../assets/images/btnewfeed/image1.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "1 minutes"
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Sophia",
            image: require('../../assets/images/btnewfeed/image2.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "3 minutes"
        
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Hana",
            image: require('../../assets/images/btnewfeed/image3.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "5 minutes"
        
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Naul",
            image: require('../../assets/images/btnewfeed/image4.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "10 minutes"
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Kimihana",
            image: require('../../assets/images/btnewfeed/image5.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "1 minutes"
        }
    ]


    _renderItemAvatar=(data)=>{ 
        return <View style={styles.listavatar__item} >
                    <Image style={styles.listavatar__item_img} source={data.item.image} />
                    <Text style={styles.listavatar__item_text}> {data.item.name}</Text>
                </View>
    }


    _renderItem= (data)=>{  
        return  <View style={styles.post}>
                    <View style={styles.post__item}>
                        <View style={styles.post__item_avatar}>
                            <Image style={styles.post__item__img} source={data.item.image}/>
                            <View style={styles.post__item__body}>
                                <Text style={styles.post__item__body__title}>{data.item.title}</Text>
                                <View style={styles.post__item_nametime}>
                                    <Text style={styles.post__item__body__name}>{data.item.name}</Text>
                                    <Text style={styles.post__item__body__time}>{data.item.time}</Text>
                                </View>
                                
                            </View> 
                        </View>
                        <View>
                            <Image style={styles.icon_more} source={require('../../assets/images/more_horiz.png')}/>         
                        </View> 
                    </View>
                    <View>
                        <Text style={styles.post__content}>{data.item.content}</Text>
                    </View>
                    <View style={styles.post__interaction}>
                        <Image style={styles.icon} source={require('../../assets/images/heart.png')} />
                        <Text style={styles.post__interaction_num}>2</Text>
                        <Image style={styles.icon} source={require('../../assets/images/comment.png')} />
                        <Text style={styles.post__interaction_num}>4</Text>
                    </View>

                </View>
    }

  return (
    <View style={styles.container}>
      <AppBar title='Feed'/>
        <View style={styles.listavatar}>
            {/* {dataAvatar.map((data,index)=>{
                return <View key={index} style={styles.listavatar__item} >
                            <Image style={styles.listavatar__item_img} source={data.image} />
                            <Text style={styles.listavatar__item_text}> {data.name}</Text>
                        </View>
            })} */}
          <FlatList 
             horizontal
            data={dataAvatar}
            renderItem={(data)=>_renderItemAvatar(data)}
            keyExtractor={(data, index) => index.toString()}  
            />              
        </View>
        

        <FlatList 
            data={dataFeeds}
            renderItem={(data)=>_renderItem(data)}
            keyExtractor={(data, index) => index.toString()}  
        />    



        
    </View>
  )
}