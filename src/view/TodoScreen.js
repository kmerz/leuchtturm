import React, {Component} from 'react';
import {Platform, View, Button, ScrollView} from 'react-native';

import Todo from './../model/Todo';
import TodoList from './../model/TodoList';
import TodoListWidget from './../view/TodoListWidget';
import AddTodo from './../view/AddTodo.js';

export default class TodoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddModal: false,
    };
  }

  addTodo = (todo) => {
    const todoListBuider = this.props.todos.toBuilder();
    const newTodoList = todoListBuider.addTodo(todo).build();
    this.props.onUpdate(newTodoList);
  };

  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
        <ScrollView>
          <TodoListWidget
            onUpdateTodo={this.props.onUpdate}
            todos={this.props.todos}
          />
        </ScrollView>
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
