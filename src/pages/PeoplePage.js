import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import axios from 'axios'

import PeopleList from '../components/PeopleList'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      people: [],
      isLoading: false
    }
  }

  componentDidMount () {
    this.setState({ isLoading: true })

    axios
      .get('https://randomuser.me/api/?nat=br&results=150')
      .then(response => {
        const { results } = response.data
        this.setState({
          people: results,
          isLoading: false
        })
      })
  }

  renderLoading () {
    return <ActivityIndicator size='large' color='#6ca2f7' />
  }

  renderPeople () {
    return (
      <PeopleList
        people={this.state.people}
        onPressItem={pageParams => {
          this.props.navigation.navigate('PeopleDetail', pageParams)
        }}
      />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        {
          this.state.isLoading
            ? this.renderLoading()
            : this.renderPeople()
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
