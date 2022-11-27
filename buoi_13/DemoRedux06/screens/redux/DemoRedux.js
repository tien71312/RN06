import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { giamCount, tangCount } from './Action'

class DemoRedux extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>{this.props.biencount}</Text>
        <TouchableOpacity
            onPress={()=>this.props.uitangCount()}
        >
             <Text>Tăng</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>this.props.uigiamCount()}
        >
             <Text>Giảm</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
//State trên store dùng chung
const mapStateToProps= state =>{
    return{
        biencount: state.count
    }
}
//Dispatch: hàm trên store dùng chung
//Dispatch: thực thi hàm (action) đã khai báo ở redux
const mapDispatchToProps= dispatch=>{
    return {
        uitangCount: ()=>{
            dispatch(tangCount())
        },
        uigiamCount:()=>{
            dispatch(giamCount())
        }
    }
}

//connect(thamso1,thamso2)
//thamso1: Map giá trị của state trên store dùng chung thành props trong component
//thamso2; Map hàm được định nghĩa trong redux thành props sử dụng trong component
export default connect(mapStateToProps,mapDispatchToProps)(DemoRedux)