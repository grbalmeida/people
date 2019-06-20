import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import axios from 'axios'

import Error from '../components/Error'
import Loading from '../components/Loading'
import PeopleList from '../components/PeopleList'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      people: [],
      isLoading: false,
      error: false
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
      }).catch(error => {
        console.log(error)

        this.setState({
          isLoading: false,
          error: true
        })
      })
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
    const { isLoading, error } = this.state

    return (
      <View style={styles.container}>
        {
          isLoading
            ? <Loading />
            : error
              ? <Error />
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
