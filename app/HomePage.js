import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

import NextPage from './NextPage'

export default class HomePage extends Component {

  _gotoNextPage() {
    this.props.navigator.push({
      name: 'NextPage',
      component: NextPage
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome My Blog</Text>
        <TouchableOpacity style={styles.nextBtn} onPress={this._gotoNextPage.bind(this)}>
          <Text style={styles.nextText}>Read More...</Text>
        </TouchableOpacity>
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
  },
  nextBtn: {
    width: 120,
    height: 30,
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'red'
  },
  nextText: {
    flex:1,
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});
