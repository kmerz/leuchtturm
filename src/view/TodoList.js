import React, {Component} from 'react';
import {Platform, Text, View, SectionList, StyleSheet} from 'react-native';

import Todo from './../model/Todo';

export default class Header extends Component {

  render() {
    const style = StyleSheet.create({
      headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#555',
        paddingTop: 5,
      },
      textStyle: {
        fontSize: 18,
        color: '#555',
        marginLeft: 10,
      },
      sectinoStyle: {
        marginLeft: 20,
        paddingBottom: 10,
        paddingTop: 10,
      }
    });

    const sections = [
      {title: "Today", data: [ new Todo("this app"), new Todo("this app as well") ]},
      {title: "Tomorrow", data: [ new Todo("and so on")]},
    ];
    const sectionList = (
      <SectionList
      style={style.sectinoStyle}
        renderItem={
          ({item, index, section}) => <Text style={style.textStyle} key={index}>{item.task}</Text>}
        renderSectionHeader={
          ({section: {title}}) => <Text style={style.headerStyle}>{title}</Text>}
        sections={sections}
        keyExtractor={(index, item) => index + item.task}
      />
    );

    return (
        <View style={{backgroundColor: '#EDDEA4'}}>
        {sectionList}
        </View>
    );
  }
}
