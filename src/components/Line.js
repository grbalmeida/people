import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Line = ({ label, content }) => (
  <View style={styles.line}>
    <Text style={[styles.cell, styles.label]}>{label}</Text>
    <Text style={styles.cell}>{content}</Text>
  </View>
)

const styles = StyleSheet.create({
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

Line.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Line
