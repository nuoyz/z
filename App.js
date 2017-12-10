/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom, NavigationActions } from 'react-navigation';

import Home from './js/home';
const EventEmitter=require('events');
global.rdEvent = new EventEmitter();
global.clickedIndex = '0';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}


const MyApp = TabNavigator({
  Home: {
    screen: Home,
  },
  Home2: {
    screen: Home,
  },
  Home3: {
    screen: Home,
  },
  Home4: {
    screen: Home,
  },
  Home5: {
    screen: Home,
  }
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#1890ff',
      inactiveTintColor: 'gray',
      showIcon: true,
      labelStyle: {  },
      indicatorStyle: {
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
      },
      style: {
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        backgroundColor: 'white'
      },
    }
  });
const RootStack = StackNavigator({
  MainTab: {
    screen: MyApp,
    navigationOptions: ({ navigation }) => ({
    }),
  }
}, {
    cardStyle: {
      shadowColor: 'transparent'
    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});