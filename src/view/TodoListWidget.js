import React, {Component} from 'react';
import {Platform, Text, View, SectionList, StyleSheet} from 'react-native';

import Todo from './../model/Todo';
import TodoListItem from './../view/TodoListItem';

export default class TodoListWidget extends Component {

  updateTodo = (oldTodo, newTodo) => {
    const newTodoList = this.props.todos.toBuilder()
                            .removeTodo(oldTodo)
                            .addTodo(newTodo)
                            .build();
    this.props.onUpdateTodo(newTodoList);
  };

  deleteTodo = (todo) => {
    const newTodoList = this.props.todos.toBuilder()
                            .removeTodo(todo)
                            .build();
    this.props.onUpdateTodo(newTodoList);
  };

  render() {
    const style = StyleSheet.create({
      headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
        padding: 5,
      },
      sectinoStyle: {
        paddingBottom: 10,
        paddingTop: 10,
      }
    });

    const sections = [
      { title: "Today", data: this.props.todos.today },
      { title: "Tomorrow", data: this.props.todos.tomorrow },
      { title: "Upcoming", data: this.props.todos.upcoming },
    ];

    const sectionList = (
      <SectionList
      style={style.sectinoStyle}
        renderItem={
          ({item, index, section}) =>
            <TodoListItem key={index} todo={item}
              onDeleteTodo={this.deleteTodo}
              toggleTodo={this.updateTodo} /> }
        renderSectionHeader={
          ({section: {title}}) => (
            <View style={{
              borderWidth: 1,
              borderColor: '#ddd'
            }}>
              <Text style={style.headerStyle}>{title}</Text>
            </View>
          )}
        sections={sections}
        keyExtractor={(index, item) => index + item.task}
      />
    );

    return (
        <View>
        {sectionList}
        </View>
    );
  }
}
