import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FavorPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pour cold milk into a metal steaming pitcher, about a third full
Release steam from the steaming wand for two seconds to eliminate any residual water</Text>
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
