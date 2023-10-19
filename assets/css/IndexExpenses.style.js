import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor:"#EEEEEE"
    },
    incomeArea: {
        marginTop: 30,
        flex: 0.30,
    },
    transactionArea: {
        marginTop: 15,
        flex: 0.65,
    },
    transactionTitle: {
        fontWeight: "bold",
        fontSize: 16,
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginBottom: 5,
    }
})

export default styles;