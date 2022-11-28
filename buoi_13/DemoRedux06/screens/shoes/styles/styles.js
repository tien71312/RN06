import { StyleSheet } from "react-native";

export default styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ebeaef',
        width:'100%'
    },
    icon:{
        width:24,
        height:24
    },
    icon30:{
        width: 30,
        height: 30
    },
    btn_icon:{
        backgroundColor:'#fff',
        padding:10,
        borderRadius:10,  
    },
    appbar:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    search_text:{
        fontSize:38,
        fontWeight:'700',
        paddingLeft:25,
        color:'#000'
    },
    search:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    search_input:{
        flexDirection: 'row', 
        alignItems: 'center',
        paddingLeft:10,
        borderRadius:10,
        width:'85%',
        backgroundColor:'#fff'
    },
    mainWrapperView: {
        flex: 1,
        backgroundColor: '#ebeaef',
        paddingTop: 10, 
        padding:15, 
      },
      activityIndicatorWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      contentContainer: {
        paddingHorizontal: 0,
        alignSelf: 'stretch',
      },
      img: {
        width: '100%',
        height: '100%',
      },
      avatarImage: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 18,
        padding:20
      },
      icon_favorite:{
        backgroundColor:'#ccc',
        marginTop:10,
        marginLeft:10,
        padding:5,
        borderRadius:40/2,
        width:35
      },
      text_name:{
        fontSize:17,fontWeight:'700',color:'#000'
      },
      text_cate:{
        fontSize:14,color:'#696969'
      },
      text_price:{
        fontSize:16,fontWeight:'500',color:'#000'
      }



})