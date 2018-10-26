import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet} from 'react-native';

export default class Header extends Component {

  render() {
    const style = StyleSheet.create({
      textStyle: {
        fontSize: 30,
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        color: '#f9f7f3',
        marginLeft: 10,
      }
    });

    return (
        <View style={{backgroundColor: '#1186c5'}}>
          <Text style={style.textStyle}>leuchtturm</Text>
        </View>
    );
  }
}
