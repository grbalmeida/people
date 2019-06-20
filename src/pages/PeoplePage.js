import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
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

  render () {
    return (
      <View>
        {this.state.isLoading && this.renderLoading()}
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
