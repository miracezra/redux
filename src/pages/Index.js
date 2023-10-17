import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TransactionCard from '../../components/TransactionCard'
import IncomeExpenses from '../../components/IncomeExpenses'

const Index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.incomeArea}>
                <IncomeExpenses />
            </View>
            <View style={styles.transactionArea}>
                <Text style={styles.transactionTitle}>Trancastions</Text>
                <TransactionCard />
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

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