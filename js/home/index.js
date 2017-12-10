/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Calendar from '../calendar';
import Diaries from '../diaries';

export default class Home extends Component {
  static navigationOptions = {
    title: '',
    tabBarIcon: ({tintColor}) => (
            <View
              style = {{
                width: 60,
                height: 20,
                borderWidth: 1,
                backgroundColor: tintColor,
                borderColor: 'black',
                borderStyle: 'solid'
             }}></View>
        ),
  }
  render() {
    return (
      <View style={styles.homeStyle}>
        <Calendar/>
        <Diaries/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeStyle: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid'
  }
});
