// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width - 45
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: width - 50,
        backgroundColor: "white",
        borderRadius: 15
    },
    dropDownContainerStyle: {
        width: width * 0.65,
        borderWidth: 0
    },
    containerStyle: {
        width: width * 0.65,
        borderWidth: 0
    },
    picker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: "center",
    },
    icon:
    {
        width: 35,
        height: 35,
        top: 5,
        left: 15,
    }
});

export default styles;
