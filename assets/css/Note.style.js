// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width - 45
const styles = StyleSheet.create({
    container:
    {
        flexDirection: 'row',
        backgroundColor: "white",
        height: 45,
        borderRadius: 15,
        marginTop: 10,
        alignItems: 'center'
    },
    icon: {
        width: 35,
        height: 35,
        left: 15,
    },
    text: {
        left: 30,
        width:width-45,

    }
})
export default styles;
