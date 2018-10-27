import React, {Component} from 'react';
import {Platform, Text, Button, View, StyleSheet, Modal} from 'react-native';

export default class DeleteModal extends Component {

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
              <Text style={style.textStyle}>You are about to delete:</Text>
              <Text style={style.todoStyle}>{this.props.todo.task}</Text>
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
