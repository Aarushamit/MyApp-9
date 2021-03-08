import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import { AppStackNavigator2 } from './AppStackNavigator2'
import { Icon } from 'react-native-elements'
import SearchLaptops from '../screens/SearchLaptops';


export const AppTabNavigator = createBottomTabNavigator({
  SearchLaptops: {
    screen: AppStackNavigator2,
    navigationOptions: {
      tabBarIcon: <Icon name="laptop" type="font-awesome5" />,
      tabBarLabel: "Search Laptops",
    }
  },
  Recommendations: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: <Icon name="users" type="font-awesome" />,
      tabBarLabel: "User Recommendations",
    }
  }
});
