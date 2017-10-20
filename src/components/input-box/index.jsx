// React
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { InputCharBox, PointedInputCharBox } from './styled'

export default class InputBox extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    text: PropTypes.string,
    position: PropTypes.number,
  }

  /**
   * defaultProps
   * @type {object}
   */
  static defaultProps = {
    text: '',
    position: 0,
  }

  /**
   * shouldComponentUpdate
   * @param  {object} nextProps next props
   * @param  {object} nextState next state
   * @return {boolean}          should component update
   */
  shouldComponentUpdate(nextProps) {
    return (
      this.props.text !== nextProps.text ||
      this.props.position !== nextProps.position
    )
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { text, position } = this.props
    return (
      <ul>
        {text.split('').map((char, index) => {
          const className = index === position ? 'is-pointed' : ''
          const CharBox =
            index === position ? PointedInputCharBox : InputCharBox
          return (
            <CharBox key={ `input-box-char-at-${index}` } className={ className }>
              {char}
            </CharBox>
          )
        })}
      </ul>
    )
  }
}
