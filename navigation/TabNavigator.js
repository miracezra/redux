import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddSalary from '../src/pages/AddSalary/AddSalary';
import Index from '../src/pages/Index';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '../assets/Icons';
import styles from '../assets/css/TabBarItem.style';
import { Provider } from 'react-redux';
import store from '../src/context/store';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Provider store={store}>
            <Tab.Navigator>
                <Tab.Screen
                    name="index"
                    component={Index}
                    options={
                        {
                            title: '',
                            headerShown: false,
                            tabBarIcon: () => {
                                return (
                                    <LinearGradient colors={["#16a4d9", "#fe8c67", "#9a28c8",]} start={{ x: -0.25, y: 0.25 }} end={{ x: 0.6, y: 2 }}
                                        locations={[0.1, 0.9, 0.5]} style={styles.linearBgIcon}>
                                        <Icons icon={"menu"} width={25} color={"white"} />
                                    </LinearGradient>)
                            }
                        }
                    }
                />
                <Tab.Screen name="addSalary" component={AddSalary} options={
                    {
                        title: '',
                        headerShown: false,
                        tabBarIcon: () => {
                            return (
                                <LinearGradient colors={["#16a4d9", "#fe8c67", "#9a28c8",]} start={{ x: -0.25, y: 0.25 }} end={{ x: 0.6, y: 2 }} locations={[0.1, 0.9, 0.5]} style={styles.linearBgIcon}>
                                    <Icons icon={"plus"} width={25} color={"white"} />
                                </LinearGradient>)
                        }
                    }
                } />
            </Tab.Navigator>

        </Provider>

    );
}

export default TabNavigator;
