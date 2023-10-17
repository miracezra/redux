import {Text, View } from 'react-native'
import React from 'react'
import Icons from '../assets/Icons'
import { formatDate } from '../config/hooks/DateFormatter'
import styles from '../assets/css/TransactionCard.style'

const TransactionCard = () => {
    //buraya  data gelcek  galiba mongo db kullancam

    const myDate = new Date('2023-08-30T15:30:00');
    return (
        
        <View style={styles.container}>
            <View style={styles.cardInfo}>
                <View style={styles.transactionInfo}>
                    <View style={styles.transactionIconBg }>
                        <Icons icon="other" width={35} color={"white"} />
                    </View>
                    <Text style={styles.transactionTitle}>TransactionCard</Text>
                </View>
                <View style={styles.price}>
                        <Text>-₺ Price</Text>
                    <Text style={styles.date}>{formatDate(myDate)}</Text>
                </View>
            </View>
        </View>
    )
}

export default TransactionCard
