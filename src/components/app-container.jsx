/**
 * React related
 */
import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'

import CharBox from './char-box'
import InputBox from './input-box'
import CharTable from './char-table'

/**
 * Provides redux store and connect with it
 * @return {ReactComponent} React component
 */
const AppContainer = () => {
  return (
    <Provider store={ store }>
      <main>
        {'Hello, Unicode!'} <CharBox code={ 12354 } />
        <InputBox text={ 'abcde' } position={ 4 } />
        <CharTable />
      </main>
    </Provider>
  )
}

/**
 * export
 */
export default AppContainer
