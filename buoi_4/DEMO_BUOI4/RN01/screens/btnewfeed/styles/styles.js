import { StyleSheet, Platform } from "react-native"

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        height: Platform.OS == "ios" ? 100 : 56,
        paddingTop: Platform.OS == "ios" ? 64 : 0,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.3
    },
    header__title:{
        fontSize:20,
        fontWeight:'500',
        color:'black'
    },
    listavatar:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#eaecef',
        borderWidth:1   
        

    },
    listavatar__item:{
        backgroundColor:'white',  
        alignItems:'center'
    },
    listavatar__item_img:{ 
        width:60,
        height:60,
        margin:10,
        borderRadius:50
    },
    listavatar__item_text:{ 
        fontSize:16,
        color:'black',
        fontWeight:'500',
        marginBottom:12
    },   

    icon: {
        width: 24,
        height: 24
    },
    icon_more: {
        width: 30,
        height: 30,
        marginTop:-30
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