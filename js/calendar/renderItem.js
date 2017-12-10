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

export default class RenderItem extends Component {
  state = {
    color: 'white'
  }
  componentDidMount() {
    const getClickedIndexListeners = global.rdEvent.listeners('clickedIndex');
    if (!getClickedIndexListeners[0]) {
      global.rdEvent.on('clickedIndex', (index) => {
        const clickedList = global.clickedIndex;
        global.clickedIndex = index;
      })
    }
  }
  render() {
    const {v, onChange} = this.props;
    const clickedIndex = `${global.clickedIndex || 0}`;
    console.log('clickedIndex', clickedIndex);
    const color = clickedIndex ? clickedIndex === `${v.index}` ? '#1890ff' : 'white' : 'white';
    return (
      <TouchableWithoutFeedback onPressIn={() => {
         console.log('press');
         global.rdEvent.emit('clickedIndex', v.index);
         onChange(v.index);
         this.forceUpdate();
         }
        }>
        <LinearGradient colors={[color, 'white']} style={styles.linearGradient}>
          <View
            style={{
              paddingTop: 10
            }}
          >
            <Text>
              wed
            </Text> 
          </View>
          <Text>
            {v.index}
          </Text>
        </LinearGradient>
       </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    width: 50, height: 100,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
