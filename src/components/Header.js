import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <View style={style.container}>
    <Text style={style.title}>{title}</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#6ca2f7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 50,
    color: '#fff'
  }
});

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
