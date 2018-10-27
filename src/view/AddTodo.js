import React, {Component} from 'react';
import {Platform, Text, TextInput, View, Modal, Button, DatePickerAndroid} from 'react-native';

import Todo from './../model/Todo';
import TodoList from './../model/TodoList';

export default class AddTodo extends Component {
  state = {
    todo: "",
    due: new Date(),
  };

  onTodoChange = (text) => {
    this.setState({todo: text});
  };

  datePicker = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      });
      let due;
      if (action !== DatePickerAndroid.dismissedAction) {
        due = new Date(year, month, day);
      }
      this.setState({ due });
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  onAddTodo = () => {
    this.props.addTodo(new Todo(this.state.todo, this.state.due));
    this.setState({todo: "", due: new Date()});
    this.props.closeModal();
  };

  render() {
    return (
        <View style={{marginTop: 22}}>
        <Modal
      animationType="slide"
      transparent={false}
      visible={this.props.modalVisible}
      onRequestClose={() => {
        this.props.closeModal();
      }}>
        <View style={{marginTop: 22}}>
        <View>
        <Text
          style={{fontSize: 20, fontWeight: 'bold'}}
        >Todo:</Text>
        <TextInput
          multiline
          placeholder="Add todo description..."
          onChangeText={this.onTodoChange}
        />
        <Button
          onPress={this.datePicker}
      title="Select due"
      color={"#97ead2"} />
        <Button
          onPress={() => {
          }}
          title="Add Todo"
          color={"#00a390"} />
        <Button
          onPress={() => this.props.closeModal()}
          title="Close"
          color={"#594157"} />
        </View>
        </View>
        </Modal>
        </View>
    );
  }
}
