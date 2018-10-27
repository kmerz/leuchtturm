import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet, TouchableNativeFeedback} from 'react-native';

import ShowNote from './ShowNote';

export default class NoteListItem extends Component {
  state = {
    showNoteModal: false,
  };

  render() {
    const style = StyleSheet.create({
      textStyle: {
        color: '#333',
        fontSize: 18,
        margin: 10,
      },
      viewStyle: {
        borderStyle: 'solid',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        flex: 1,
        borderColor: '#ddd',
      }
    });
    return (
      <TouchableNativeFeedback
        onLongPress={() => console.log("DELETE")}
        onPress={() => { this.setState({showNoteModal: true})}}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={style.viewStyle}>
          <Text style={style.textStyle}>{this.props.note.header}</Text>
          <ShowNote note={this.props.note}
            showModal={this.state.showNoteModal}
            closeModal={() => { this.setState({showNoteModal: false})}} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}
