import { StyleSheet } from "react-native";

export default styles= StyleSheet.create({
    icon:{
        width:25,
        height:25
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    container_text:{
        fontSize:18,
        fontWeight:'700',
        marginBottom:20
    },
    container_emoji:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'100%',
        marginTop:20
    }

})