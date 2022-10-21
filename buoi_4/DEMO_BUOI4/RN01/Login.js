import { Text, View, StyleSheet,Image, TextInput } from 'react-native'
import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}> 
        {/* Header */}
            <View style={styles.header}>
               <Text style={styles.header__title}>Register Now</Text> 
            </View>
        {/* End header */}

        {/* Body */}
             <View style={styles.body}>
                <View>
                    {/* Column */}
                    <View style={styles.containerInput}>
                        <Text>Email</Text>
                        {/* Row */}
                        <View style={styles.containerInput__input}>
                            <Image style={styles.containerInput__input_img} source={require('./assets/email.png')} />
                            <TextInput style={styles.containerInput__input_textInput} />
                        </View>
                    </View>

                    <View style={styles.containerInput}>
                        <Text>Password </Text>
                        {/* Row */}
                        <View style={styles.containerInput__input}>
                            <Image style={styles.containerInput__input_img} source={require('./assets/pass.png')} />
                            <TextInput secureTextEntry={true} style={styles.containerInput__input_textInput} />
                        </View>
                    </View>   
                            <View style={[styles.btn, styles.btn_primary]}> 
                                <Text style={styles.btn__text_white}>SIGN IN</Text>
                            </View>
                            <View style={[styles.btn, styles.btn_secondary]}> 
                                <Text style={styles.btn__text_green}>SIGN UP</Text>
                            </View>
                     


                </View>
                    
            </View>     
         {/* End body */}
 
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingLeft:30,
        paddingBottom:30
    },
    header__title:{
        color:'white',
        fontSize:30,
        fontWeight:'700'
    },
    body:{
        flex:3,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30
    },
    containerInput:{
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        marginTop:16
    },
    containerInput__input:{
        flexDirection:'row', 
        alignItems:'center'
    },
    containerInput__input_img:{
        width:24,
        height:24
    },
    containerInput__input_textInput:{
        flex:1,
        padding:8
    },
    btn:{
        borderRadius:20,
        height:42,
        marginTop:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:''
    },
    btn_primary:{
        backgroundColor:'#009387'
    },
    btn_secondary:{
        borderWidth:1,
        borderColor:'#009387'

    },
    btn__text:{
        fontSize:16,

    },
    btn__text_white:{
        color:'white'
    },
    btn__text_green:{
        color:'green'
    }
   
})