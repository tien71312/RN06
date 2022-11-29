import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Appbardetail from './Appbardetail'
import styles from '../styles/styles'

export default function Detail(props,route) {
    //  console.log(props)
  return (
    <View>
        <Appbardetail /> 
        <View style={{justifyContent:'center',alignItems:'center'}}><Image style={styles.images} source={{uri: props.route.params.image}} /></View>
        <View style={{  justifyContent:'center',  alignItems:'center',  }}>
             <View style={[styles.detail_slide,styles.shadow]}>
                <View><Image style={styles.icon} source={require('../images/back.png')} /></View>
                <View ><Image style={styles.images_mini} source={{uri: props.route.params.image}} /></View>
                <View><Image style={styles.images_mini} source={{uri: props.route.params.image}} /></View>
                <View ><Image style={styles.images_mini} source={{uri: props.route.params.image}} /></View>
                <View><Image style={styles.icon} source={require('../images/next.png')} /></View>
            </View>
        </View>
        <View style={styles.detail_bottom}>
            <View style={styles.detail_title}>
                <View style={{width:'80%'}}><Text style={styles.detail_title__text}>{props.route.params.name}</Text></View>
                <View><Image style={{height:20,width:70}} source={require('../images/rate.jpg')} /></View>
            </View>
            <View style={{justifyContent:'flex-start', width:'80%',padding:10}}>
                <View><Text style={{fontSize:20}}>Shoe</Text></View>
                <View><Text style={styles.detail_price__text}>$ {props.route.params.price}</Text></View>
            </View>

            {/* <View><Image style={{height:120,width:320}} source={require('../images/countbasket.jpg')} /></View> */}
            <TouchableOpacity style={{width:'80%',justifyContent:'center',}}>
                <View style={styles.btn_buy}><Text style={styles.btn_buy__text}>Buy now</Text></View>
            </TouchableOpacity>
            
        </View>

      
    </View>
  )
}