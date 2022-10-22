import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import Login from './Login'
// Một component chỉ có duy nhất 1 component tổng
// View mặc định kiểu flex direction là column
export default class App extends Component {
// View, TouchableOpacity(click): dùng chia bố cục giao diện
//Text: hiển thị nội dung text
// JXS {}: cho phép xử lý logic code

_onClickLogin(){
    console.log('Hello click login')
}

  render() {

    const anh1=require('./assets/anh1.jpg')
    return (
      <View style={[styles.container,styles.primarycolor]}>
        {/* <Text>App</Text>
        <Login/>
        <Text>HELLO </Text>
        <Image resizeMode='cover' style={styles.imageSize} source={anh1}/>
        <Image style={styles.imageSize} source={{uri:'https://m.economictimes.com/thumb/msid-71641818,width-1200,height-900,resizemode-4,imgsize-587039/getty.jpg'}} />
      <TextInput secureTextEntry={true} style={styles.textInput} placeholder='User name'  /> */}

    <TextInput onChangeText={(data)=>{console.log(data)}} style={styles.textInput} placeholder='User name'  />
      <TouchableOpacity style={{
                    backgroundColor:'green',
                    width:'100%',
                    height:56, 
                    borderRadius:5,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                onPress={this._onClickLogin}
                >
                <Text style={{color:'white', fontWeight:'700',fontSize:16}} >Login</Text>
             
      </TouchableOpacity> 



      </View>
    ) 
  }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,
        padding:24    
    },
    primarycolor:{ 
        justifyContent:'center',
        alignItems:'center'   
    },
    imageSize:{
        width:150,
        height:150

    },
    textInput:{
        height:42,
        width:200,
        backgroundColor:'green',
        color:'white'
    }

})
