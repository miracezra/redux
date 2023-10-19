import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import Categories from '../../../components/Categories'
import Value from '../../../components/Value'
import styles from '../../../assets/css/AddSalary.style'
import LinearGradient from 'react-native-linear-gradient'
import DateSelector from '../../../components/DateSelector'
import Note from '../../../components/Note'
import RNFS from "react-native-fs"
import uuid from "react-native-uuid"
import { useSelector } from 'react-redux'

const AddSalary = () => {

  const title = useSelector(state => state.expense.title);
  const icon = useSelector(state => state.expense.icon);
  const date = useSelector(state => state.expense.date);
  const note = useSelector(state => state.expense.not);
  const amount = useSelector(state => state.expense.amount);


  const addDataToFile = async (newData) => {
    const path = '/Users/developer/Desktop/ReduxExample/assets/data/income_expense_data.json';

    const exists = await RNFS.exists(path);
    let currentData = [];

    if (exists) {
      const fileContent = await RNFS.readFile(path);
      currentData = JSON.parse(fileContent);
    }
    currentData.push(newData);

    await RNFS.writeFile(path, JSON.stringify(currentData), 'utf8');
  };

  const newData = {
    id: uuid.v4(),
    transactionTitle: title,
    icon: icon,
    amount: amount,
    date: date,
    not: note
  };
  const alertMessage = "Yiyiniz içiniz; fakat israf etmeyiniz! Çünkü Allâh isrâf edenleri sevmez.\n (A´râf Suresi 7/31)";
  const alert = () =>
    Alert.alert('Gider Kaydedildi',alertMessage
      , [

      { text: 'Tamam', onPress: () => console.log('Tamam') },
    ]);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.salary}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, paddingBottom: 10 }}>HARCAMA EKLE</Text>
        <Value />
      </View>
      <View style={[styles.categories, { flex: 0.11, }]}>
        <Categories />
      </View>
      <View style={[styles.categories, { zIndex: 1 }]}>
        <DateSelector />
        <Note />
      </View>
      <View style={styles.save}>
        <LinearGradient colors={['#4d8ce3', '#d462e0', '#fe8a6c']} start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 4 }}
          locations={[0.2, 0.5, 0.9]} style={styles.saveButton}>
          <TouchableOpacity onPress={() => { addDataToFile(newData); alert() }}>
            <Text style={styles.saveButtonText}>KAYDET</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  )
}

export default AddSalary