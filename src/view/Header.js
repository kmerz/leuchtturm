import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet} from 'react-native';

export default class Header extends Component {

  render() {
    const style = StyleSheet.create({
      textStyle: {
        fontSize: 30,
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
      }
    });

    return (
        <View>
          <Text style={style.textStyle}>leuchtturm</Text>
        </View>
    );
  }
}
