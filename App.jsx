import { SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
const App = () => {

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer >
        </SafeAreaView>


    );
}
export default App