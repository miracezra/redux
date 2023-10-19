// styles.js
import { StyleSheet ,Dimensions} from 'react-native';

const width = Dimensions.get("screen").width-45
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    textInput: {
        width: width-50,
        backgroundColor: '#FFFFFF',
        height:width/5,
        borderRadius:20,
        textAlign:"center",
        fontSize:45
    }
    
});

export default styles;
