import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import PeopleListItem from './PeopleListItem'

const PeopleList = ({ people }) => {
  return (
    <View style={styles.container}>
      {people.map((person, index) => <PeopleListItem person={person} key={index} />)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff'
  }
})

PeopleList.propTypes = {
  people: PropTypes.array.isRequired
}

export default PeopleList
