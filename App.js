/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

import Layout from './src/view/Layout';

export default class App extends Component<Props> {
  render() {
    return (
      <Layout />
    );
  }
}
