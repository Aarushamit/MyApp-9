import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SearchSuggestions from '../screens/SearchSuggestions';
import InformationScreen from '../screens/InformationScreen';
import AdminInformationScreen from '../screens/AdminInformationScreen';
import SearchLaptops from '../screens/SearchLaptops';

// stack navigation between search suggestions and  information screen
export const AppStackNavigator = createStackNavigator({
  Suggestions: {
    screen: SearchSuggestions,
    navigationOptions: {
      headerShown: false
    }
  },
  Information: {
    screen: InformationScreen,
    navigationOptions: {
      headerShown: false
    }
  },

},

  {
    initialRouteName: 'Suggestions'
  }
);
