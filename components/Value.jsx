import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from "../assets/css/Value.style"
import { useDispatch } from 'react-redux'
import { setAmount } from '../redux/actions/actions'

const Value = () => {
    const [amount,setAmountLocal]=useState('');
    const dispatch = useDispatch();
    const handleAmountChangge = (value)=>{
        setAmountLocal(value)
    }
    const handleAmountSave = ()=>{
        dispatch(setAmount(amount))
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} inputMode='numeric' keyboardType='phone-pad' placeholder='$0' onChange={handleAmountChangge} onChangeText={handleAmountSave}/>
        </View>
    )
}

export default Value