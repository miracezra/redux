import { Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../assets/css/DateSelector.style'
import DatePicker from 'react-native-date-picker'
import Icons from '../assets/Icons'
import { setDate } from '../src/context/Slice'
import { useDispatch } from 'react-redux'

const DateSelector = () => {
  const dispatch = useDispatch();
  const [date, setLocalDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  date && useEffect(() => {
    dispatch(setDate(date.toISOString()));
  }, [date])

  return (
    <TouchableOpacity onPress={() => { setOpen(true) }} style={styles.container}>
      <View style={styles.pickerArea}>
        <View style={styles.icon}>
          <Icons icon="calendar" width={35} color={"black"} />
        </View>
        <Text style={{ left: 30 }}>{date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</Text>
      </View>

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => { setOpen(false); setLocalDate(date) }}
        onCancel={() => { setOpen(false) }}
        confirmText='Kaydet'
        cancelText='Çık' />
    </TouchableOpacity>
  )
}

export default DateSelector

