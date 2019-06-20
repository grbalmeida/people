import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import PeopleListItem from './PeopleListItem'

const PeopleList = ({ people, onPressItem }) => {
  return (
    <ScrollView style={styles.container}>
      {people.map((person, index) => {
        return (
          <PeopleListItem
            person={person}
            key={index}
            navigateToPeopleDetail={onPressItem}
          />
        )
      })}
    </ScrollView>
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
