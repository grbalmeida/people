import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class PeopleDetailPage extends Component {
  render () {
    const { person } = this.props.navigation.state.params
    const { email } = person
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: person.picture.large }}
          style={styles.avatar}
        />
        <View style={styles.detailContainer}>
          <View style={styles.line}>
            <Text style={[styles.cell, styles.label]}>Email:</Text>
            <Text style={styles.cell}>{email}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  avatar: {
    aspectRatio: 1
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1
  },
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#c5c5c5'
  },
  cell: {
    fontSize: 16,
    paddingLeft: 5
  },
  label: {
    fontWeight: 'bold'
  }
})
