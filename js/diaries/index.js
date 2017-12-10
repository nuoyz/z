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
  TouchableHighlight
} from 'react-native';

export default class Diaries extends Component {
  renderItem = () => {
    return (
      <TouchableHighlight activeOpacity={.95}
        style={{marginBottom: 8, marginTop: 0}}
      >
        <View style={[styles.topicItem]}>
          <View>
            <View>
            <Text ellipsizeMode="tail" numberOfLines={2} style={[styles.topicTitle]}>20171210</Text>
            </View>
            <View>
            <Text ellipsizeMode="tail" numberOfLines={3} style={{fontSize: 13, color: '#6b6a6b', marginTop: 6, marginBottom: 6}}>
              In the year of our lord 1239 There once lived a girl of a royal line The ancient stories do recall She was the fairest of them all
              In a castle made of stone Every night she slept alone Any noise that would raise the dead Couldn’t wake her sleepyhead
            </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={styles.diariesStyle}>
        <FlatList
          data={[{index: 1}, {index: 2}, {index: 3}, {index: 4}, {index: 5}, {index: 6}, {index: 7}, {index: 8}]}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  diariesStyle: {
    width: 600,
    height: 500,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid'
  },
  topicItem: {
    flexDirection: 'row',
    flex: 1,
    padding: 15,
    backgroundColor: '#ffffff',
    },
    topicTitle: {
      fontSize: 15,
      color: '#101010',
    }
});
