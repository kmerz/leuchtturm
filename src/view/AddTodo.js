import React, {Component} from 'react';
import {Platform, Text, TextInput, ScrollView, View, Modal, Button, DatePickerAndroid} from 'react-native';

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
    const newTodo = Todo.builder()
                        .task(this.state.todo)
                        .due(this.state.due)
                        .build();
    this.props.addTodo(newTodo);
    this.props.closeModal();
    this.setState({todo: "", due: new Date()});
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
                style={{fontSize: 20, fontWeight: 'bold', margin: 10}}
              >New Todo</Text>
              <ScrollView>
                <TextInput
                  style={{margin: 5, maxHeight: 170 }}
                  multiline
                  placeholder="Add todo description..."
                  onChangeText={this.onTodoChange}
                />
              </ScrollView>
              <Button
                onPress={this.datePicker}
                title="Select due"
                color={"#97ead2"} />
              <Button
                onPress={this.onAddTodo}
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
