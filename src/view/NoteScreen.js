import React, {Component} from 'react';
import {Platform, View, Button, ScrollView} from 'react-native';

import NoteListWidget from './NoteListWidget';
import NoteList from '../model/NoteList';
import Note from '../model/Note';
import AddNote from './AddNote';

export default class NoteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddModal: false,
    };
  }

  addNote = (newNote) => {
    const newNotes = this.props.notes.toBuilder()
                         .addNote(newNote)
                         .build();
    this.props.onUpdate(newNotes);
  };

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        <ScrollView>
          <NoteListWidget
            noteList={this.props.notes}
            onUpdate={this.props.onUpdate}
          />
        </ScrollView>
        <Button
          onPress={() => this.setState({showAddModal: true})}
          title="Add Note"
          color={"#00a390"}
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            bottom: 35
          }} />
        <AddNote showModal={this.state.showAddModal}
          addNote={this.addNote}
          closeModal={() => { this.setState({ showAddModal: false })}}
        />
      </View>
    );
  }
}
