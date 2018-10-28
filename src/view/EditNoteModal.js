import React, {Component} from 'react';
import {Platform, Text, TextInput, ScrollView, View, Modal, Button} from 'react-native';

import Note from './../model/Note';
import NoteList from './../model/NoteList';

export default class EditNoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.note.header,
      note: props.note.note,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ header: newProps.note.header, note: newProps.note.note });
  }

  onInputChange = (key, value) => {
    const state = {};
    state[key] = value;
    this.setState(state);
  };

  updateNote = () => {
    const { header, note } = this.state;
    const newNote = this.props.note.toBuilder()
            .header(header)
            .note(note)
            .build();
    this.props.updateNote(newNote);
    this.props.closeModal();
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
              >Edit Note</Text>
              <TextInput
                style={{margin: 5}}
                value={this.state.header}
                placeholder="Add note description..."
                onChangeText={(text) => this.onInputChange('header', text)}
              />
              <ScrollView>
                <TextInput
                  style={{margin: 5, maxHeight: 170 }}
                  value={this.state.note}
                  multiline
                  placeholder="Add note..."
                  onChangeText={(text) => this.onInputChange('note', text)}
                />
              </ScrollView>
              <Button
                onPress={this.updateNote}
                title="Update Note"
                color={"#97ead2"}
                style={{
                  alignSelf: 'flex-end',
                  position: 'absolute',
                  bottom: 35
                }} />
              <Button
                onPress={() => {
                  this.props.onDeleteNote(this.props.note);
                  this.props.closeModal();
                }}
                title="Delete Note"
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
