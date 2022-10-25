import { StyleSheet, Platform } from "react-native"

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F6F6F6"
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
        fontWeight:'500'
    },   

    icon: {
        width: 24,
        height: 24
    },
    item:{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16
    },
    item__body:{
        marginLeft: 16
    },
    item__body__title:{
        fontSize: 16,
        fontWeight: "500"
    },
    item__body__desc:{
        fontSize: 14,
        color: "#CCC"
    },
    item__img:{
        height: 56,
        width: 56,
        borderRadius: 28
    }
})