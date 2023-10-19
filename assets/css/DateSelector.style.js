// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width - 45
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: width - 50,
        backgroundColor: "white",
        borderRadius: 15,
        height: 45,zIndex:1
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
        left: 15,
    },
    pickerArea: {
        flexDirection: "row",
        height: 45,
        borderRadius: 15,
        alignContent: "center",
        alignItems: "center"
    }
});

export default styles;
