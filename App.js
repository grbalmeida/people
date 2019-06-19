import { createAppContainer, createStackNavigator } from 'react-navigation'

import PeoplePage from './src/pages/PeoplePage'

const StackNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  }
})

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer
