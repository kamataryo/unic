import styled from 'styled-components'

export const InputCharBox = styled.span`
  display: inline-box;
  padding: 5px 5px;
`

export const PointedInputCharBox = InputCharBox.extend`
  border-bottom: 2px solid black;
`
