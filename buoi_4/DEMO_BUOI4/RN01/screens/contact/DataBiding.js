import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class DataBiding extends Component {
    //SQLite, Data...
    // Khi gọi setState() thì sẽ  rerender lại giao diện
    state={
        ketQua:0
    }
    hello='Hello data biding'
    soA=6
   // ketQua=0
    contact={
        title:'Biden',
        desc: 'President American'
    }
    tinhTong =(so1,so2)=>{
        let kq=so1+so2
        return kq 
    }
    _onClickTinhTong=(so1,so2)=>{
        // Thay đổi giá trị của thuộc tính trong state
        this.setState({
            ketQua:this.tinhTong(so1,so2)
        }) 
        console.log(`Kết quả là ${this.state.ketQua}`)
    }

  render() {
    let soB=10
    return (
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text>{this.contact.title}</Text>
        {/* <Text>{this.tinhTong(this.soA,soB)}</Text> */}
        <Text>{this.state.ketQua}</Text>
        <TouchableOpacity
            onPress={()=>this._onClickTinhTong(this.soA,soB)}
        >
            <Text>Tính tổng</Text>
        </TouchableOpacity>
      </View>
    )
  }
}