import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import PeopleListItem from './PeopleListItem'

const PeopleList = ({ people, onPressItem }) => {
  return (
    <View style={styles.container}>
      {people.map((person, index) => {
        return (
          <PeopleListItem
            person={person}
            key={index}
            navigateToPeopleDetail={onPressItem}
          />
        )
      })}
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
