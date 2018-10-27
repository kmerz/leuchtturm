import React, {Component} from 'react';
import {Platform, Text, View, Button} from 'react-native';

import Todo from './../model/Todo';
import TodoList from './../model/TodoList';
import Header from './../view/Header';
import TodoListWidget from './../view/TodoListWidget';
import AddTodo from './../view/AddTodo.js';

export default class Layout extends Component {
  state = {
    showAddModal: false,
    todoList: new TodoList([]),
  };

  addTodo = (todo) => {
    const todoListBuider = this.state.todoList.toBuilder();
    const newTodoList = todoListBuider.addTodo(todo).build();
    this.setState({todoList: newTodoList});
  };

  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
        <Header />
        <TodoListWidget todos={this.state.todoList}/>
        <Button
          onPress={() => this.setState({showAddModal: true})}
          title="Add Todo"
          color={"#00a390"}
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            bottom: 35
        }} />
        <AddTodo modalVisible={this.state.showAddModal}
          closeModal={() => { this.setState({showAddModal: false})}}
          addTodo={this.addTodo}
        />
        </View>
    );
  }
}
