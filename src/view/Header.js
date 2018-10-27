import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet} from 'react-native';

export default class Header extends Component {

  render() {
    const style = StyleSheet.create({
      textStyle: {
        fontSize: 30,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#333',
        marginRight: 10,
        textAlign: 'right',
      }
    });

    return (
        <View>
          <Text style={style.textStyle}>leuchtturm.</Text>
        </View>
    );
  }
}
