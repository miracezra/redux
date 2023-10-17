import { SafeAreaView } from 'react-native'
import React from 'react'
import AddSalary from './src/pages/AddSalary/AddSalary';
import LinearGradient from 'react-native-linear-gradient';
import { Provider } from 'react-redux';
import Index from './src/pages/Index';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import store from './redux/store/store';



const App = () => {
    
    return (
        <Provider store={store}>
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </SafeAreaView>
        </Provider>
    );
}
export default App