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
    icon: {
        width: 24,
        height: 24
    },
})