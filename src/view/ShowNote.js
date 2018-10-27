import React, {Component} from 'react';
import {Platform, Text, TextInput, View, Modal, Button, DatePickerAndroid} from 'react-native';

import Note from './../model/Note';
import NoteList from './../model/NoteList';

export default class ShowNote extends Component {
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
              >{this.props.note.header}</Text>
              <Text
                style={{fontSize: 18, margin: 10}}
              >{this.props.note.note}</Text>
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
