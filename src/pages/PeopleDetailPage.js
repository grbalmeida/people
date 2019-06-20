import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import Line from '../components/Line'
import { capitalizeFirstLetter } from '../utils'

export default class PeopleDetailPage extends Component {
  render () {
    const { person } = this.props.navigation.state.params
    const { email, phone, nat, location: { city, state } } = person
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: person.picture.large }}
          style={styles.avatar}
        />
        <View style={styles.detailContainer}>
          <Line label='Email:' content={email} />
          <Line label='City:' content={capitalizeFirstLetter(city)} />
          <Line label='State:' content={capitalizeFirstLetter(state)} />
          <Line label='Phone:' content={phone} />
          <Line label='Nationality' content={nat} />
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
  }
})
