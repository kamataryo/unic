import React from 'react'
import PropTypes from 'prop-types'

export default class CharBox extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    code: PropTypes.number.isRequired,
    isCombining: PropTypes.bool,
  }

  /**
   * defaultProps
   * @type {object}
   */
  static defaultProps = {
    isCombining: false,
  }

  /**
   * shouldComponentUpdate
   * @param  {object} nextProps next props
   * @param  {object} nextState next state
   * @return {boolean}          should component update
   */
  shouldComponentUpdate(nextProps) {
    this.props.code !== nextProps.code
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { code, isCombining } = this.props
    const pre = isCombining ? '\u00A0' : ''
    const char = String.fromCharCode(code)

    return <span data-code={ code.toString(16) }>{pre + char}</span>
  }
}
