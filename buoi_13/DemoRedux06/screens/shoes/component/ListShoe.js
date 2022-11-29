import { View, Text,FlatList,ActivityIndicator,Image,Dimensions ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import StaggeredList,{ AnimationType } from '@mindinventory/react-native-stagger-view'
import styles from '../styles/styles';
import { NavigationContainer, useNavigation } from '@react-navigation/native';  
export default function ListShoe(props) { 
  const navigation = useNavigation()
  const SCREEN_WIDTH = Dimensions.get('window').width;
 
 const renderChildren = item => { 
    return (
      <TouchableOpacity
         onPress={()=> navigation.push('detail',{id:item.id,name:item.name,price:item.price,image:item.image}) }
      >
      <View style={getChildrenStyle()} key={item.id}>
        <View style={styles.icon_favorite}><Image style={styles.icon} source={require('../images/favorite.png')} /></View>
        <View style={styles.avatarImage}>
          <Image
            onError={() => {}}
            style={{width: (SCREEN_WIDTH - 140) / 2,height:70}}
            source={{
              uri: item.image,
            }} 
            resizeMode={'cover'}
          />
          <Text style={styles.text_name}>{item.name}</Text>
          <Text style={styles.text_cate}>Shoe</Text>
          <Text style={styles.text_price}>$ {item.price}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  };

const getChildrenStyle = () => {
    return {
      width: (SCREEN_WIDTH - 70) / 2, 
      backgroundColor: 'white',
      margin: 10,
      borderRadius: 18,
      flex:1
    };
  };



  return (  
   
    <View style={styles.mainWrapperView}>
    {props.isLoading ? (
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator color={'green'} size={'large'} />
      </View>
    ) : ( 
        <StaggeredList 
              data={props.data}
              animationType={'FADE_IN_FAST'}
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => renderChildren(item)}
              isLoading={props.isLoading}
              LoadingView={
                <View style={styles.activityIndicatorWrapper}>
                  <ActivityIndicator color={'black'} size={'large'} />
                </View>
              }
            />    
    )}
    </View>
  
  )
}
 