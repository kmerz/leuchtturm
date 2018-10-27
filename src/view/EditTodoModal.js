import React, {Component} from 'react';
import {Platform, Text, Button, ScrollView, TextInput, View, StyleSheet, Modal, DatePickerAndroid} from 'react-native';

import Todo from '../model/Todo';

export default class EditTodoModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: props.todo.task,
      due: props.todo.due,
    };
  }

  onTodoChange = (text) => {
    this.setState({task: text});
  };

  datePicker = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: this.state.due
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

  render() {
    const style = StyleSheet.create({
      textStyle: {
        color: '#555',
        fontSize: 20,
        margin: 10,
      },
      todoStyle: {
        color: '#111',
        fontSize: 20,
        margin: 30,
      }
    });
    return (
      <Modal
        animationType="slide"
        visible={this.props.showModal}
        onRequestClose={this.props.onClose}>
          <View style={{marginTop: 22}}>
            <View>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', margin: 10}}
              >Edit Todo</Text>
              <ScrollView>
                <TextInput
                  style={{margin: 5, maxHeight: 170 }}
                  multiline
                  placeholder="Add todo description..."
                  value={this.state.task}
                  onChangeText={this.onTodoChange}
                />
              </ScrollView>
              <Button
                onPress={this.datePicker}
                title="Select due"
                color={"#97ead2"} />
              <Button
                title={"Update"}
                color={"#032b2f"}
                onPress={() => {
                  const {task, due} = this.state;
                  const newTodo = new Todo(task, due, this.props.todo.done);
                  this.props.onUpdateTodo(newTodo);
                  this.props.onClose();
                }} />
              <Button
                title={"Delete"}
                color={"#00a390"}
                onPress={() => {
                  this.props.onDelete(this.props.todo);
                  this.props.onClose();
                }} />
             <Button
               title={"Cancel"}
               color={"#594157"}
               onPress={this.props.onClose}
             />
            </View>
          </View>
      </Modal>
    );
  }
}
