/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RenderItem from './renderItem';

const calendarList = [
  {year: 2017, month: 12, day: 10}, {year: 2017, month: 12, day: 9},
  {year: 2017, month: 12, day: 8}, {year: 2017, month: 12, day: 7},
  {year: 2017, month: 12, day: 6}, {year: 2017, month: 12, day: 5},
  {year: 2017, month: 12, day: 4}, {year: 2017, month: 12, day: 3},
  {year: 2017, month: 12, day: 2}, {year: 2017, month: 12, day: 1},
  {year: 2017, month: 11, day: 30}, {year: 2017, month: 11, day: 29},
  {year: 2017, month: 11, day: 28}, {year: 2017, month: 12, day: 27},
  {year: 2017, month: 11, day: 26}, {year: 2017, month: 12, day: 25},
  {year: 2017, month: 11, day: 24}, {year: 2017, month: 12, day: 23},
  {year: 2017, month: 11, day: 22}, {year: 2017, month: 12, day: 21}
];
export default class Calendar extends Component {
  state = {
    color: 'white',
    selected: `index-0`
  }
  renderItem = (v) => {    
    return (
      <RenderItem
        v={v}
        selected
        clickedIndex={this.state.clickedIndex}
        onChange={(c) => {
          console.log('ccccc', c);
          this.setState({selected: `$index-{c}`});
        }}
      />
    )
  }
  render() {
    console.log('calendarList', calendarList.length);
    return (
      <View style={styles.calendarStyle}>
        <FlatList
          refreshing={this.state.refreshing || false}
          horizontal
          data={calendarList}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id}
          extraData={this.state}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    width: 50, height: 100,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  calendarStyle: {
    width: '100%'
  }
});
