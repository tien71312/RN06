import { Text, View ,Image} from 'react-native'
import React, { Component } from 'react'
import styles from './styles/styles'

export default class Contact extends Component {
  datas = [
    {
        title:"Bill Gates",
        desc:"Microsoft Company",
        image:require("../../assets/images/billgates.jpeg")
    },
    {
        title:"Elon musk",
        desc:"Tesla Company",
        image:require("../../assets/images/elon_musk.jpeg")
    },
    {
        title:"Jeff Bezos",
        desc:"Amazon Company",
        image:require("../../assets/images/jeff.jpeg")
    },
    {
        title:"Joe Belfiore",
        desc:"Microsoft Company",
        image:require("../../assets/images/joe_belfiore.webp")
    },
    {
        title:"Joe Biden",
        desc:"President American",
        image:require("../../assets/images/joe_biden.jpeg")
    },
    {
        title:"Mark Zuckerberg",
        desc:"Microsoft Company",
        image:require("../../assets/images/mark.jpeg")
    },
    {
        title:"Vladimir Putin",
        desc:"President Russia",
        image:require("../../assets/images/putin.jpeg")
    }
  ]

  _renderHeader = () => {
    return <View style={styles.header}>
                <Image style={styles.icon} source={require("../../assets/images/menu.png")} />
                <Text style={styles.header__title}>Contact</Text>
                <Image style={styles.icon} source={require("../../assets/images/search.png")}/>
            </View>
  }

  _renderItem = (data,index) => {
    return <View style={styles.item} key={index}>
             <Image style={styles.item__img} source={data.image} />
             <View style={styles.item__body}>
                <Text style={styles.item__body__title}>{data.title}</Text>
                <Text style={styles.item__body__desc}>{data.desc}</Text>
             </View>
           </View>
  }

  _renderContactList = () => {
    return this.datas.map((data,index)=>(
         this._renderItem(data,index)
    ))
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        {this._renderContactList()}
      </View>
    )
  }
}