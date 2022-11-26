import { StyleSheet } from "react-native";
import { COLORS, SIZES, STYLES } from "../../../common/Theme";

export default styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.white
    },
    icon:{
        width:24,
        height:24
    },
    appbar:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SIZES.padding * 2
    },
    appbar__title:{
        backgroundColor: "#F6F6F6",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius,
        width: "70%",
        height: 50
    },
    category:{
        padding: SIZES.padding * 2
    },
    category__text:{
        fontSize: 30,
        lineHeight: 36,
        fontWeight: "500"
    },
    categoryList:{
        padding: SIZES.padding,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius * 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: SIZES.padding,
        ...STYLES.shadow
    },
    categoryList__circle:{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    categoryList__title:{
        fontSize: 12,
        lineHeight: 22,
        marginBottom: 10
    },
    categoryList__circle_selected:{
        backgroundColor: COLORS.white
    },
    categoryList_selected:{
        backgroundColor: COLORS.primary
    },
    categoryList__title_selected:{
        color: COLORS.white,
        fontWeight: "700"
    }
})