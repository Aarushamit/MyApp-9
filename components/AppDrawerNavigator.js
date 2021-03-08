import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import AddRecommendations from '../screens/AddRecommendations';
import { Icon } from 'react-native-elements';
import UpdatesScreen from '../screens/UpdatesScreen';
import RevisedUpdates from '../screens/RevisedUpdates';
import { Image } from 'react-native';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppTabNavigator,
    navigationOptions: {
      drawerIcon: <Icon name="home" type="fontawesome5" />
    }
  },

  MyRecommendations: {
    screen: AddRecommendations,
    navigationOptions: {
      drawerIcon: <Icon name="plus" type="font-awesome" />,
      drawerLabel: "Add Recommendations",
    }
  },
  /*Notification : {
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon : <Icon name="bell" type ="font-awesome" />,
      drawerLabel : "Notifications"
    }
  },*/
  updates: {
    screen: UpdatesScreen,
    navigationOptions: {
      drawerIcon: <Icon name="gift" type="font-awesome" />,
      drawerLabel: "updates"
    }
  },
  Settings: {
    screen: SettingScreen,
    navigationOptions: {
      drawerIcon: <Icon name="settings" type="fontawesome5" />,
      drawerLabel: "Settings"
    }
  }
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName: 'Home'
  })
