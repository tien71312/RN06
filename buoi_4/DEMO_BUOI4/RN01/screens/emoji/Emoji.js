import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styles from './styles/styles'

export default class Emoji extends Component {
  state ={
    selected: require('../../assets/emoji/haha.png')
  }
  datas=[
    require('../../assets/emoji/angry.png'),
    require('../../assets/emoji/care.png'),
    require('../../assets/emoji/haha.png'),
    require('../../assets/emoji/like.png'),
    require('../../assets/emoji/love.png'),
    require('../../assets/emoji/sad.png')
  ]
  _onPressEmoji=(data)=>{
    this.setState({
      selected:data
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.container_text}>Bạn đang cảm thấy thế nào?</Text>
        <Image source={this.state.selected} />
        <View style={styles.container_emoji}>
          {this.datas.map((data,index)=>(
            <TouchableOpacity
              onPress={()=>(this._onPressEmoji(data))}
            >
                <Image style={styles.icon} source={data} />
            </TouchableOpacity>
            
          ))}
        </View>

      </View>
    )
  }
}