import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class DataBiding extends Component {
    //SQLite, Data...
    // Khi gọi setState() thì sẽ  rerender lại giao diện
    state={
        ketQua:0,
        count:0
    }
    data = [
        'Hello',
        'Cyber',
        'React native'
    ]

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
        // // Thay đổi giá trị của thuộc tính trong state
        // this.setState({
        //     ketQua:this.tinhTong(so1,so2)
        // }) 
        // console.log(`Kết quả là ${this.state.ketQua}`)
        let tangCount =this.state.count += 1
        this.setState({
            count:tangCount
        })
    }

    _renderDesc =()=>{
        return (
            <Text>{this.state.count==5 ? this.contact.desc : ''}</Text>
        )
    }
    _renderArray =() =>{
       return this.data.map((data,index)=>{
            return <Text>{data}</Text>
        } )
    }
    //so sánh 3 ngôi
    //Cú pháp: điều kiện ? đúng : sai
  render() {
    let soB=10
    console.log('Render ' + this.state.count)
    return (
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
        {this._renderDesc()}
        {/* <Text>{this.state.count==5 ? this.contact.desc : ''}</Text> */}
        {/* <Text>{this.tinhTong(this.soA,soB)}</Text> */}
        <Text>{this.state.count}</Text>
        <TouchableOpacity
            onPress={()=>this._onClickTinhTong(this.soA,soB)}
        >
            <Text>Tính tổng</Text>
        </TouchableOpacity>
        {/* {this.data.map((value, index)=>{
             return   <Text>{value}</Text>
        })} */}

       { this._renderArray()}
      </View>
    )
  }
}