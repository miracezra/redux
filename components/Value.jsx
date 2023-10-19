import { View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "../assets/css/Value.style"
import { useDispatch, useSelector } from 'react-redux'
import { setAmount } from '../src/context/Slice'

const Value = () => {
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expense); //!burası store daki değeri alır
    const [value, setValue] = useState();

    const handleLocal = (value) => {
        setValue(value)
        console.log(expenses)
    }
    useEffect(() => {
        dispatch(setAmount(value))
    }, [value])


    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} inputMode='numeric' keyboardType='phone-pad' placeholder='$0' onChangeText={handleLocal}  />
        </View>
    )
}

export default Value