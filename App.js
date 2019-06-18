import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';

export default class App extends Component {
  renderList () {
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data;
        const names = results.map(person => person.name.first);
        console.log(names);
      });
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
