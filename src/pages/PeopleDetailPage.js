import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class PeopleDetailPage extends Component {
  render () {
    const { person } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: person.picture.large }}
          style={styles.avatar}
        />
        <Text />
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
  }
})
