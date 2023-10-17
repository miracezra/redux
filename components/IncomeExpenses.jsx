import {Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icons from '../assets/Icons'
import styles from '../assets/css/IncomeExpensesCard.style'

const IncomeExpenses = () => {
    return (
        <LinearGradient colors={["#16a4d9", "#fe8c67", "#9a28c8",]} start={{ x: -0.25, y: 0.25 }} end={{ x: 0.6, y: 2 }}
            locations={[0.1, 0.9, 0.5]} style={{ borderRadius: 20 }}>
            <View style={styles.container}>
                <View style={styles.infoAccount}>
                    <Text style={styles.totalBalanceTitle}>Total Balance</Text>
                    <Text style={styles.infoTotalBalance}>$ 4800.00</Text>
                </View>
                <View style={styles.infoIncomeExpenses}>
                    <View style={styles.income}>
                        <View style={[styles.iconBackground, { transform: [{ rotate: '180deg' }] }]}>
                            <Icons icon={"arrow"} width={20} color={"green"} />
                        </View>
                        <View style={styles.incomeTextContainer}>
                            <Text style={styles.incomeText}>Income Title</Text>
                            <Text style={styles.incomeText}>Price</Text>
                        </View>

                    </View>
                    <View style={styles.income}>
                        <View style={styles.iconBackground}>
                            <Icons icon={"arrow"} width={20} color={"red"} />
                        </View>
                        <View style={styles.incomeTextContainer}>
                            <Text style={styles.incomeText}>Income Title</Text>
                            <Text style={styles.incomeText}>Price</Text>
                        </View>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default IncomeExpenses
