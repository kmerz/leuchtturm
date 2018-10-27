import React, {Component} from 'react';
import {Platform, View, Button, ScrollView} from 'react-native';

import NoteListWidget from './NoteListWidget';
import NoteList from '../model/NoteList';
import Note from '../model/Note';
import AddNote from './AddNote';

export default class TodoScreen extends Component {

  constructor(props) {
    super(props);
    const note1 = new Note("Franz macht blaue", " A rather long story");
    const notes = new NoteList([note1]);
    this.state = {
      showAddModal: false,
      noteList: notes,
    };
  }

  addNote = (newNote) => {
    const newNotes = this.state.noteList.toBuilder()
                         .addNote(newNote)
                         .build();
    this.setState({noteList: newNotes});
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
            noteList={this.state.noteList}
            updateNoteList={(newNotes) => this.setState({nodeList: newNotes})}
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
