import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      
        <View style={styles.container}>
          <View style={[styles.container_all, styles.container__purple]}>
            <Text style={styles.container_text}>Purple: #C9C9FF</Text>
          </View>
          <View style={[styles.container_all,styles.container__blue]}>
            <Text style={styles.container_text}>Blue: #3D85C6</Text>
          </View>
          <View style={[styles.container_all,styles.container__green]}>
            <Text style={styles.container_text}>Green: #96CC96</Text>
          </View>
          <View style={[styles.container_all,styles.container__yellow]}>
            <Text style={styles.container_text}>Yellow: #F4B940</Text>
          </View>                  
        </View>
     
    )
  }
}

const styles = StyleSheet.create({
  container:{ 
    flex:1,
    justifyContent:'space-around'

  },
  container_all:{
    margin:30,
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:10,
    height:150
  },
  container_text:{
    fontSize:16,
    fontWeight:'700' 
  },
  container__purple:{
    backgroundColor:'#C9C9FF'
  },
  container__blue:{
    backgroundColor:'#3D85C6'
  },
  container__green:{
    backgroundColor:'#96CC96'
  },
  container__yellow:{
    backgroundColor:'#F4B940'
  } 


})