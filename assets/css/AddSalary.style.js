// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width - 45
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: "center",
        flex: 1,
    },
    salary: {
        flex: 1 / 5
    },
    categories: {
        flex: 0.25,
        zIndex: 999
    },
    save: {
        flex: 0.40,
        marginTop: 15,
        justifyContent:"flex-end"
    },
    saveButton: {
        width: width - 50,
        height: 40,
        borderRadius: 15,
        justifyContent: "center",
        position:"relative",
        alignContent:"flex-end"
    },
    saveButtonText: {
        textAlignVertical: "center",
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold"
    },

});

export default styles;
