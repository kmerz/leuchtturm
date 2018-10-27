import React, {Component} from 'react';
import {Platform, View, Button, ScrollView} from 'react-native';

import NoteListWidget from './NoteListWidget'

export default class TodoScreen extends Component {
  state = {
    showAddModal: false,
  };

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        <ScrollView>
        <NoteListWidget />
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
      </View>
    );
  }
}
