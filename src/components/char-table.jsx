import React from 'react'
import CharBox from './char-box'

const unicodeRange = {
  CombiningDiacriticalMark: [0x0300, 0x036f],
  CombiningDiacriticalMarksSupplement: [0x1dc0, 0x1dff],
  CombiningDiacriticalMarksForSymbols: [0x20d0, 0x20ff],
  CombiningHalfMarks: [0xfe20, 0xfe2f],
}

const CharTable = () => {
  return (
    <div>
      {Object.keys(unicodeRange).map(key => {
        return (
          <div key={ key }>
            {Array(unicodeRange[key][1] - unicodeRange[key][0] + 1)
              .fill(0)
              .map((_0, index) => {
                const code = index + unicodeRange[key][0]
                return (
                  <CharBox key={ `char-box-${code}` } code={ code } isCombining />
                )
              })}
          </div>
        )
      })}
    </div>
  )
}

export default CharTable
