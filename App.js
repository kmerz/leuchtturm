import React, {Component} from 'react';
import {Platform, View} from 'react-native';

import Header from './src/view/Header';
import Navigation from './src/view/Navigation';
import Persistence from './src/model/Persistence';

import AppModel from './src/model/AppModel';
import NoteList from './src/model/NoteList';
import TodoList from './src/model/TodoList';

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    const newNotes = new NoteList([]);
    const newTodos = new TodoList([]);
    const appModel = new AppModel(newTodos, newNotes);
    this.state = { appModel };
  }

  componentDidMount() {
    // Remove file if format changes
    // Persistence.reset();
    Persistence.read()
               .then((content) => {
                 const appModel = AppModel.fromJson(content);
                 this.setState({ appModel });
               })
               .catch((err) => {
                 if (err.code != 'ENOENT') {
                   console.warn(err);
                 }
               });
  }

  onUpdate = (todos, notes) => {
    const newAppModel = this.state.appModel.toBuilder()
                            .notes(notes)
                            .todos(todos)
                            .build();
    this.setState({ appModel: newAppModel });
    Persistence.write(newAppModel.toJson())
               .catch((err) => { console.warn(err)});
  };

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        <Header />
        <Navigation
          onUpdate={this.onUpdate}
          todos={this.state.appModel.todos}
          notes={this.state.appModel.notes}
        />
      </View>
    );
  }
}
