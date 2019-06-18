import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';

export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount () {
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data;
        this.setState({ people: results });
      });
  }

  renderList () {
    const textElements = this.state.people.map((person, index) => {
      const { first } = person.name;
      return <Text key={index}>{first}</Text>
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
