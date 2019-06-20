import React, { Component } from 'react'
import { View } from 'react-native'
import axios from 'axios'

import PeopleList from '../components/PeopleList'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      people: []
    }
  }

  componentDidMount () {
    axios
      .get('https://randomuser.me/api/?nat=br&results=15')
      .then(response => {
        const { results } = response.data
        this.setState({ people: results })
      })
  }

  render () {
    return (
      <View>
        <PeopleList
          people={this.state.people}
          onPressItem={pageParams => {
            this.props.navigation.navigate('PeopleDetail', pageParams)
          }}
        />
      </View>
    )
  }
}
