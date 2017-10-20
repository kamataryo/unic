import React from 'react'
import PropTypes from 'prop-types'

export default class CharBox extends React.component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    code: PropTypes.number.isRequired,
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { code } = this.props
    const char = String.charCodeAt(code)

    return <div>{char}</div>
  }
}
