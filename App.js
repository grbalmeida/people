import { createAppContainer, createStackNavigator } from 'react-navigation'

import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from './src/pages/PeopleDetailPage'
import { capitalizeFirstLetter } from './src/utils'

const defaultHeaderStyle = {
  color: 'white',
  fontSize: 30
}

const StackNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const { first, last } = navigation.state.params.person.name

      return ({
        title: `${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`,
        headerTitleStyle: {
          ...defaultHeaderStyle
        }
      })
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'People',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5'
    },
    headerTitleStyle: {
      ...defaultHeaderStyle,
      flexGrow: 1,
      textAlign: 'center'
    }
  }
})

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer
