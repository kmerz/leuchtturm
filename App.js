import React, {Component} from 'react';
import {Platform, View} from 'react-native';

import Header from './src/view/Header';
import Navigation from './src/view/Navigation';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        <Header />
        <Navigation />
      </View>
    );
  }
}
