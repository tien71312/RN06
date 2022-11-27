import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class LifeCycle extends Component {
// Mounting
    state = {
        count:0
    }

    // constructor(props){
    //     super(props)
    //     // Khai báo biến, giá trị mặc định, khai báo state, và khởi tạo class
    //     console.log("Constructor")
    // }

    //Hàm này chỉ hoạt động khi nó là component con của một component khác
    // static getDerivedStateFromProps(prevProps,state){
    //     //PreProps : Chứa toàn bộ thuộc tính của Component cha truyền qua
    //     //Sử dụng khi mong muốn xử lý logic code của props mà Component cha
    //     //truyền qua và gán trị lại cho state hoặc logic code.
    //     console.log("DrivedState From Props")
    //     // console.log(prevProps.name)
    //     // console.log(state)
    //     if(prevProps.name == "Cybersoft"){
    //         return { count : 1}
    //     }

    //     return null
        
    //     // //Return phải là state
    //     // return {
    //     //     count: 1
    //     // };
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log("should Component Update")
        console.log(nextProps)
        console.log(nextState)
        return true
    }

  render() {
    console.log("Render")//
    return (
      <View 
        style={{
            flex: 1,
            justifyContent:'center', 
            alignItems:'center'}}
      >
        <TouchableOpacity
            onPress={()=> this.setState({count: this.state.count + 1})}
        >
            <Text>LifeCycle</Text>
        </TouchableOpacity>
        
        <Text>{this.state.count}</Text>
      </View>
    )
  }

  componentDidUpdate(prevProps,state){
    console.log("Component Did Update")
    console.log(prevProps)
    console.log(state)
    return true
  }

  componentDidMount(){
    //Nó chạy sau khi giao diện đã được hiển thị.
    //Khi call api để lấy dữ liệu và hiển thị lên giao diện
    console.log("Component did mount")
  }
//   End Mounting
}