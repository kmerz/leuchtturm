import React, {Component} from 'react';
import {Platform, Text, View, SectionList, StyleSheet} from 'react-native';

import Todo from './../model/Todo';

export default class TodoListWidget extends Component {

  render() {
    const style = StyleSheet.create({
      headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
        padding: 5,
      },
      textStyle: {
        fontSize: 18,
        color: '#333',
        marginLeft: 10,
      },
      sectinoStyle: {
        paddingBottom: 10,
        paddingTop: 10,
      }
    });

    const sections = [
      { title: "Today", data: this.props.todos.today },
      { title: "Tomorrow", data: this.props.todos.tomorrow },
    ];
    const sectionList = (
      <SectionList
      style={style.sectinoStyle}
        renderItem={
          ({item, index, section}) => <Text style={style.textStyle} key={index}>{item.task}</Text>}
        renderSectionHeader={
          ({section: {title}}) => (
            <View style={{
              borderWidth: 1,
              borderColor: '#ddd'
            }}>
              <Text style={style.headerStyle}>{title}</Text>
            </View>
          )}
        sections={sections}
        keyExtractor={(index, item) => index + item.task}
      />
    );

    return (
        <View>
        {sectionList}
        </View>
    );
  }
}
