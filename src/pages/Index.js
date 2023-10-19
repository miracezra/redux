import {  Text, View } from 'react-native'
import React from 'react'
import TransactionCard from '../../components/TransactionCard'
import IncomeExpenses from '../../components/IncomeExpenses'
import styles from '../../assets/css/IndexExpenses.style'

const Index = () => {
    return (

        <View style={styles.container}>
          
                <View style={styles.incomeArea}>
                    <IncomeExpenses />
                </View>
                <View style={styles.transactionArea}>
                    <Text style={styles.transactionTitle}>Giderler</Text>
                    <TransactionCard />
                </View>
          
        </View>

    )
}

export default Index

