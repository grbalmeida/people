import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { capitalizeFirstLetter } from '../utils'

const PeopleListItem = ({ person, navigateToPeopleDetail }) => {
  const { first, last } = person.name
  const { thumbnail } = person.picture

  return (
    <TouchableOpacity onPress={() => {
      console.log('Click')
      navigateToPeopleDetail()
    }}>
      <View style={styles.line}>
        <Image style={styles.avatar} source={{ uri: thumbnail }} />
        <Text style={styles.lineText}>
          {`${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7
  },
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row'
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50
  }
})

PeopleListItem.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string
    }),
    picture: PropTypes.shape({
      thumbnail: PropTypes.string
    })
  }),
  navigateToPeopleDetail: PropTypes.func.isRequired
}

export default PeopleListItem
