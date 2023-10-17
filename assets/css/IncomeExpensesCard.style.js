const { StyleSheet, Dimensions } = require("react-native");
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container: {
        width: width - 35,
        height: width * 0.47,
        borderRadius: 15
    },
    iconBackground: {
        width: 20,
        height: 20,
        backgroundColor: "white",
        opacity: 0.6,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",

    },
    infoAccount: {
        flexDirection: "column",
        paddingTop: 20
    },
    infoTotalBalance: {
        fontWeight: "600",
        fontSize: 37,
        textAlign: "center",
        color: "white",
        paddingTop: 7
    },
    totalBalanceTitle: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center"
    },
    infoIncomeExpenses: {
        flexDirection: 'row',
        marginHorizontal: 25,
        marginTop: 25,
        justifyContent: "space-between"
    },
    income: {
        flexDirection: "row",
        paddingHorizontal: 5,
        
    },
    incomeTextContainer: {
        paddingHorizontal: 5,
        bottom:12,
        left:5
    }
    ,
    incomeText:{
        color:"white",
        paddingVertical:2
    }
})
export default styles;