import React, {Component} from 'react';
import {Platform, Text, View, FlatList, StyleSheet} from 'react-native';

import NoteListItem from './NoteListItem';

export default class NoteListWidget extends Component {

  onUpdate = (newNote) => {
    const newNotes = this.props.noteList.toBuilder()
                         .updateNote(newNote)
                         .build();
    this.props.onUpdate(newNotes);
  };

  onDelete = (oldNote) => {
    const newNotes = this.props.noteList.toBuilder()
                         .removeNote(oldNote)
                         .build();
    this.props.onUpdate(newNotes);
  };

  render() {
    return (
      <View>
        <FlatList
          renderItem={({item, index}) =>
            <NoteListItem key={index}
                              note={item}
                              onUpdate={this.onUpdate}
                              onDelete={this.onDelete}
            /> }
          data={this.props.noteList.notes}
          keyExtractor={(index, item) => index + item.header}
        />
      </View>
    );
  }
}
