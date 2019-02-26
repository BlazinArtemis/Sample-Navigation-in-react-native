import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import Settings from './Settings';
import Home from './Home';

const MainNavigator = createStackNavigator({
  SettingScreen: { screen: Settings },
  HomeScreen: { screen: Home }
});


const App = createAppContainer(MainNavigator);

export default App;
 

