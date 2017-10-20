/**
 * React related
 */
import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'

import CharBox from './char-box'

/**
 * Provides redux store and connect with it
 * @return {ReactComponent} React component
 */
const AppContainer = () => {
  return (
    <Provider store={ store }>
      <main>
        {'Hello, Unicode!'} <CharBox code={ 12354 } />
      </main>
    </Provider>
  )
}

/**
 * export
 */
export default AppContainer
