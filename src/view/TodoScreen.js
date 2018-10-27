import React, {Component} from 'react';
import {Platform, View, Button, ScrollView} from 'react-native';

import Todo from './../model/Todo';
import TodoList from './../model/TodoList';
import TodoListWidget from './../view/TodoListWidget';
import AddTodo from './../view/AddTodo.js';
import Persistence from './../model/Persistence';

export default class TodoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddModal: false,
      todoList: new TodoList([]),
    };
  }

  componentDidMount() {
    // Remove file if format changes
    //Persistence.reset();
    Persistence.read()
               .then((content) => {
                 const todos = TodoList.fromJson(content);
                 this.setState({todoList: todos});
               })
               .catch((err) => {
                 if (err.code != 'ENOENT') {
                   console.warn(err);
                 }
               });
  }

  addTodo = (todo) => {
    const todoListBuider = this.state.todoList.toBuilder();
    const newTodoList = todoListBuider.addTodo(todo).build();
    this.updateTodoList(newTodoList);
  };

  updateTodoList = (todoList) => {
    this.setState({todoList});
    const todoJson = todoList.toJson();
    Persistence.write(todoJson)
               .catch((err) => { console.warn(err)});
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
            onUpdateTodo={this.updateTodoList}
            todos={this.state.todoList}
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
