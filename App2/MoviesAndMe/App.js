// App.js

import React from 'react'
import Search from './Components/Search'
import Navigation from './Navigation/Navigation.js'
import Store from './Store/configureStore'
import { Provider } from 'react-redux'

import {createAppContainer } from 'react-navigation'

const AppContainer = createAppContainer(Navigation);

export default class App extends React.Component {
  render() {
      return (
      <Provider store={Store}>
         <AppContainer />
      </Provider>
    )
  }
}
