import React, {Component} from 'react';
import {Platform, Text, View, FlatList, StyleSheet} from 'react-native';

import NoteListItem from './NoteListItem';

export default class NoteListWidget extends Component {
  render() {
    const flatList = (
      <FlatList
        renderItem={
          ({item, index}) =>
            <NoteListItem key={index} note={item} /> }
        data={this.props.noteList.notes}
        keyExtractor={(index, item) => index + item.header}
      />
    );

    return (
        <View>
        {flatList}
        </View>
    );
  }
}
