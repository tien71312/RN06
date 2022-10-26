import { StyleSheet, Platform } from "react-native"

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: 'column',
        backgroundColor: "white",
        justifyContent: 'flex-start', 
        paddingLeft: 15,
        paddingRight: 15,
        height: Platform.OS == "ios" ? 150 : 156,
        paddingTop: Platform.OS == "ios" ? 64 : 20,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.3
    },
    header__title:{
        fontSize:18,
        fontWeight:'500',
        color:'black',
        marginTop:-3,
        marginLeft:3
    },
    header__listavatar:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'  
    },
    header__listavatar__item:{
        backgroundColor:'white',  
        alignItems:'center'
    },
    header__listavatar__item_img:{ 
        width:60,
        height:60,
        margin:10,
        borderRadius:50
    },
    header__listavatar__item_text:{ 
        fontSize:16,
        color:'black',
        fontWeight:'500',
        marginBottom:12
    },   
    ketban:{
        flexDirection:'column',  
    },
    ketban_title:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:5,
        marginLeft:15
    },
    ketban__listavatar:{
        flexDirection:'row', 
        alignItems:'center',
        backgroundColor:'#ccc',
        marginLeft:15,
        marginRight:15,
        marginBottom:20,
        borderRadius:5,  
    },
    ketban__listavatar_profile:{  
        flexDirection:'row',
        alignContent:'center',
        width:'70%', 
    },   
    ketban__listavatar__item:{
        backgroundColor:'white',  
        alignItems:'center'
    },
    ketban__listavatar__item_img:{ 
        width:60,
        height:60,
        margin:10,
        borderRadius:50
    },
    ketban__listavatar__item_text:{  
       marginTop:15
    },   
    ketban__listavatar__item_name:{ 
        fontSize:16,
        color:'black',
        fontWeight:'500',
        marginBottom:2
    },  
    ketban__listavatar__item_friend:{ 
        fontSize:16,
        color:'black', 
        marginBottom:12
    },
    ketban_btn:{
        marginLeft:20,
        marginTop:-10
    },
    icon: {
        width: 20,
        height: 20
    },
    btn:{
        borderRadius:15,
        height:32,
        marginTop:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'',
        paddingLeft:15,
        paddingRight:15
    },
    btn_primary:{
        backgroundColor:'#bbbafd'
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
    btn__text_black:{
        color:'black'
    },   
    btn__text_green:{
        color:'green'
    },







    post:{ 
        marginLeft: 16,
        marginRight: 16 
    }, 
    post__content:{ 
        color:'#505050',
        fontSize:15,
        fontWeight:'500'
    }, 
    post__interaction:{ 
       flexDirection:'row',
       marginTop:14,
       marginBottom:14
    }, 
    post__interaction_num:{ 
        color:'#000',
        fontSize:16,
        fontWeight:'500', 
        marginRight:15,
        marginLeft:5
     },              
    post__item:{
        flexDirection: "row",
        alignItems: "center", 
        marginTop: 16,
        marginBottom:16
    },
    post__item_avatar:{ 
        width:'90%',
        flexDirection:'row'
    }, 
    post__item_nametime:{   
        flexDirection:'row'
    },      
    post__item__body:{
        marginLeft: 16
    },
    post__item__body__title:{
        color:'#505050',
        fontSize: 16,
        fontWeight: "500",
    },
    post__item__body__name:{

        fontSize: 16,
        color: "#CCC",
        width:'60%'
    },
    post__item__body__time:{
        fontSize: 16,
        color: "#CCC"
    },  
    post__item__img:{
        height: 56,
        width: 56,
        borderRadius: 28
    }
})