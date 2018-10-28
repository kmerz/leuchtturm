import React, {Component} from 'react';
import {Platform, Text, TextInput, ScrollView, View, Modal, Button} from 'react-native';

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
    const { header, note } = this.state;
    const newNote = Note.builder()
                        .header(header)
                        .note(note)
                        .build();
    this.props.addNote(newNote);
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
                style={{margin: 5}}
                placeholder="Add note description..."
                onChangeText={(text) => this.onInputChange('header', text)}
              />
              <ScrollView>
                <TextInput
                  style={{margin: 5, maxHeight: 170 }}
                  multiline
                  placeholder="Add note..."
                  onChangeText={(text) => this.onInputChange('note', text)}
                />
              </ScrollView>
              <Button
                onPress={this.onAddNote}
                title="Add Note"
                color={"#00a390"}
                style={{
                  alignSelf: 'flex-end',
                  position: 'absolute',
                  bottom: 35
                }} />
              <Button
                onPress={() => this.props.closeModal()}
                title="Close"
                color={"#594157"}
                style={{
                  alignSelf: 'flex-end',
                  position: 'absolute',
                  bottom: 35
                }} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
