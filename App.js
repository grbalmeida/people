import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default class App extends Component {
  renderList () {
    const names = [
      'Steve Vai',
      'Joe Satriani',
      'Eddie Van Halen',
      'Jimi Hendrix'
    ];

    const textElements = names.map((name, index) => {
      return <Text key={index}>{name}</Text>
    });

    return textElements;
  }

  render () {
    return (
      <View>
        <Header title='People' />
        {this.renderList()}
      </View>
    );
  }
}
