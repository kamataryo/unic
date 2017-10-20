// react
import React from 'react'
import { render } from 'react-dom'

// component
import AppContainer from 'components/app-container'
import { AppContainer as HMRContainer } from 'react-hot-loader'

/**
 * Entry point
 * @type {DOMElement}
 */
const MOUNT_NODE = document.getElementById('app')

// Go!
render(<AppContainer />, MOUNT_NODE)

// Hot Module Replacement settings
// eslint-disable-next-line
if (__DEBUG__ && module.hot) {
  module.hot.accept('./components/app-container', () => {
    const NextApp = require('./components/app-container').default
    render(
      <HMRContainer>
        <NextApp />
      </HMRContainer>,
      MOUNT_NODE,
    )
  })
}
