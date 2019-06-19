import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const PeopleListItem = ({ person }) => {
  const { first, last } = person.name

  return (
    <View style={styles.line}>
      <Text style={styles.lineText}>{`${first} ${last}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  lineText: {
    fontSize: 20,
    paddingLeft: 15
  },
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

PeopleListItem.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string
    })
  })
}

export default PeopleListItem
