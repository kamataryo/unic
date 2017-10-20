import React from 'react'
import CharBox from 'components/char-box'
import { shallow } from 'enzyme'

test('render test', () => {
  const wrapper = shallow(<CharBox code={ 12354 } />)
  expect(wrapper.text()).toBe('あ')
})
