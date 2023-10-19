import { TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icons from '../assets/Icons'
import styles from '../assets/css/Note.style'
import { setNot } from '../src/context/Slice'
import { useDispatch } from 'react-redux'

const Note = () => {
    const dispatch = useDispatch();
    const [tempText, setTempText] = useState("Not")
    useEffect(() => {
        dispatch(setNot(tempText))
    }, [tempText])

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Icons icon={"note"} width={35} color="black" />
            </View>
            <TextInput
                style={[styles.text, { width: 200 }]} // Örnek olarak 200 genişlik değeri verilmiştir.
                value={tempText}
                onChangeText={setTempText}
                clearTextOnFocus={true}
            />

        </View>
    )
}

export default Note

