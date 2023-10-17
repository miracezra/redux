// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        width: width - 30,
        height: width / 6,
        backgroundColor: "white",
        opacity:0.8,
        borderRadius: 15,
        paddingLeft: 5
    },
    transactionTitle: {
        fontWeight: "500",
        paddingLeft:10
    },
    price: {
        flexDirection: "column",
    },
    cardInfo: {
        width: width - 40,
        height: width / 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    date: {
        color: "gray",
        width: width * 0.3,
    },
    transactionInfo: {
        flexDirection: "row",
        alignItems: "center"
    },
    transactionIconBg: {
        width: 50, height: 50,
        backgroundColor: 'red',
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles;
