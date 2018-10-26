import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

import Todo from './../model/Todo';
import Header from './../view/Header';
import TodoList from './../view/TodoList';

export default class Layout extends Component {
  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
        <Header />
        <TodoList />
        </View>
    );
  }
}
