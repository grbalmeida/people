import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import PeopleListItem from './PeopleListItem'

const PeopleList = ({ people, onPressItem }) => {
  return (
    <FlatList
      style={styles.container}
      data={people}
      renderItem={({ item }) => (
        <PeopleListItem
          person={item}
          navigateToPeopleDetail={onPressItem}
        />
      )}
      keyExtractor={(item, index) => `${item.name.first}${index}`}
    />
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
