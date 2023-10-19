import { FlatList, Text, View } from 'react-native'
import React from 'react'
import Icons from '../assets/Icons'
import styles from '../assets/css/TransactionCard.style'
import income from "../assets/data/income_expense_data.json"
import formatDate from '../config/hooks/DateFormatter'
import LinearGradient from 'react-native-linear-gradient'

const TransactionCard = () => {
    const data = income.map(item => item);
    const sortedData = [...income].sort((a, b) => new Date(b.date) - new Date(a.date));

    const renderItem = ({ item }) => (
        <View style={styles.container}>
          <View style={styles.cardInfo}>
            <View style={styles.transactionInfo}>
            <LinearGradient colors={["#9e0818", "#9e0818", "#ec3e61",]} start={{ x: -0.25, y: 0.25 }} end={{ x: 0.6, y: 2 }}
                 locations={[0.1, 0.9, 0.5]} style={styles.transactionIconBg}>
                <Icons icon={item.icon || "other"} width={35} color={"white"} />
              </LinearGradient>
              <View style={{flexDirection:'column'}}>
              <Text style={styles.transactionTitle}>{item.transactionTitle}</Text>
              <Text style={styles.transactionTitle}>{item.not}</Text>
              </View>
            </View>
            <View style={styles.price}>
              <Text>-₺ {item.amount || "Price"}</Text>
              <Text style={styles.date}>{formatDate(item.date)}</Text>
            </View>
          </View>
        </View>
      );
      
    return (
        <>
            <FlatList
                keyExtractor={(item, index) => (index + 1)}
                data={sortedData}
                renderItem={renderItem}
            />
        </>
    )
}

export default TransactionCard;
