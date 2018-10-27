import React, {Component} from 'react';
import {Platform, Text, TextInput, View, Modal, Button, DatePickerAndroid} from 'react-native';

import Note from './../model/Note';
import NoteList from './../model/NoteList';

export default class AddNote extends Component {
  state = {
    header: "",
    note: "",
  };

  onInputChange = (key, value) => {
    const state = {};
    state[key] = value;
    this.setState(state);
  };

  onAddNote = () => {
    this.props.addNote(new Note(this.state.header, this.state.note));
    this.props.closeModal();
    this.setState({header: "", note: ""});
  };

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.showModal}
          onRequestClose={() => {
              this.props.closeModal();
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', margin: 10}}
              >New Note</Text>
              <TextInput
                style={{margin: 10}}
                placeholder="Add note description..."
                onChangeText={(text) => this.onInputChange('header', text)}
              />
              <TextInput
                style={{margin: 10}}
                multiline
                placeholder="Add note..."
                onChangeText={(text) => this.onInputChange('note', text)}
              />
              <Button
                onPress={this.onAddNote}
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
