import React, {Component} from 'react';
import {Platform, View, Text, Button} from 'react-native';

import TodoScreen from './TodoScreen';
import Header from './Header';

export default class Navigation extends Component {
  state = {
    selected: 'todo',
  };

  navItem() {
    if (this.state.selected == 'todo') {
      return (<TodoScreen />);
    } else {
      return (<Text>Hallo</Text>);
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
