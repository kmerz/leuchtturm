import React, {Component} from 'react';
import {Platform, View, Text, Button} from 'react-native';

import TodoScreen from './TodoScreen';
import NoteScreen from './NoteScreen';
import Header from './Header';

export default class Navigation extends Component {
  state = {
    selected: 'todo',
  };

  onTodosUpdate = (todos) => {
    this.props.onUpdate(todos, this.props.notes);
  };

  onNotesUpdate = (notes) => {
    this.props.onUpdate(this.props.todos, notes);
  };

  navItem() {
    if (this.state.selected == 'todo') {
      return (<TodoScreen onUpdate={this.onTodosUpdate}
                todos={this.props.todos} />);
    } else {
      return (<NoteScreen onUpdate={this.onNotesUpdate}
                notes={this.props.notes} />);
    }
  }

  render() {
    return (
      <View>
        <View style={{height: '5%'}}>
          <View style={{flex: 1, flexDirection: 'row', height: 10}}>
          <View style={{width: '50%', height: 10}}>
          <Button onPress={ () => { this.setState({ selected: 'todo'}); }}
            title="Todo" color="#032b2f" />
          </View>
          <View style={{width: '50%', height: 10}}>
          <Button onPress={ () => { this.setState({ selected: 'notes'}); }}
            title="Notes" color="#594157" />
            </View>
          </View>
        </View>
        <View style={{height: '90%'}}>
          {this.navItem()}
        </View>
      </View>
    );
  }
}
