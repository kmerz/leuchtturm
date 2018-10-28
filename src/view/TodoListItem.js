import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet, CheckBox, TouchableNativeFeedback} from 'react-native';

import EditTodoModal from './EditTodoModal';

export default class TodoListItem extends Component {
  state = {
    showEditModal: false,
  };

  toggleTodo = () => {
    const newState = !this.props.todo.done;
    this.props.updateTodo(this.props.todo.toBuilder().done(newState).build());
  };

  render() {
    const lineStyle = this.props.todo.done ? 'line-through' : 'none';
    const style = StyleSheet.create({
      textStyle: {
        textDecorationLine: lineStyle,
        color: '#333',
        fontSize: 18,
        margin: 10,
      },
      checkBoxStyle: {
        margin: 10,
      },
      viewStyle: {
        borderStyle: 'solid',
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'stretch',
        flex: 1,
        borderColor: '#ddd',
      }
    });

    return (
      <TouchableNativeFeedback
        onPress={this.toggleTodo}
        onLongPress={() => this.setState({showEditModal: true})}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={style.viewStyle}>
          <CheckBox
            style={style.checkBoxStyle}
            value={this.props.todo.done} />
          <Text style={style.textStyle}>{this.props.todo.task}</Text>
          <EditTodoModal showModal={this.state.showEditModal}
            todo={this.props.todo}
            onUpdateTodo={(newTodo) => {
              this.props.updateTodo(newTodo);
            }}
            onDelete={this.props.onDeleteTodo}
            onClose={() => {this.setState({showEditModal: false})}} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}
