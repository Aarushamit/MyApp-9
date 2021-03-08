import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import AdminInformationScreen from '../screens/AdminInformationScreen';
import SearchLaptops from '../screens/SearchLaptops';

// stack navigation between search laptop and admin information screen
export const AppStackNavigator2 = createStackNavigator({
    SearchLaptops: {
        screen: SearchLaptops,
        navigationOptions: {
            headerShown: false
        }
    },
    AdminInformation: {
        screen: AdminInformationScreen,
        navigationOptions: {
            headerShown: false
        }
    },
},

    {
        initialRouteName: 'SearchLaptops'
    }
);
