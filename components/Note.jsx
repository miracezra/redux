import { TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icons from '../assets/Icons'
import styles from '../assets/css/Note.style'

const Note = () => {
    
    const [text, setText] = useState("")
    const [tempText, setTempText] = useState("Not")
    const handleSave =()=>{
        setText(tempText)
    }
    
    console.log(text)
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

