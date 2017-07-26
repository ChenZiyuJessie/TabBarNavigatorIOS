import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NextPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Coffee is more than a beverage, however. It is a memory, an anticipation, 
        a lifetime of consoling moments of modest pleasure woven into our lives
</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'red'
  }
});
