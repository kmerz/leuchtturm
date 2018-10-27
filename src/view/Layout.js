import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

import Todo from './../model/Todo';
import TodoList from './../model/TodoList';
import Header from './../view/Header';
import TodoListWidget from './../view/TodoListWidget';

export default class Layout extends Component {
  render() {
    const todo1 = new Todo("this app needs to be really good, i will waste much time on it. allrighty thats gonna be so cool", new Date());
    const dateTomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const todo2 = new Todo("The world", dateTomorrow);
    const todo3 = new Todo("The universe", dateTomorrow);
    const todoList = new TodoList([todo1, todo2, todo2])

    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
        <Header />
        <TodoListWidget todos={todoList}/>
        </View>
    );
  }
}
