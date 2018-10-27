import React, {Component} from 'react';
import {Platform, Text, View, FlatList, StyleSheet} from 'react-native';

export default class NoteListWidget extends Component {
  render() {
    const style = StyleSheet.create({
      headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
        padding: 5,
      },
    });

    const flatList = (
      <FlatList
        style={style.sectinoStyle}
        renderItem={
          ({item, index}) =>
            <Text key={index} style={style.headerStyle}>{item.header}</Text> }
        data={[{header: "Hallo Spencer"}]}
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
