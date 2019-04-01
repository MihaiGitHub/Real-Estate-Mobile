import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Router from './Router';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
