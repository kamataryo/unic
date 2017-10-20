import React from 'react'
import InputBox from 'components/input-box'
import { shallow } from 'enzyme'

test('render test', () => {
  const wrapper = shallow(<InputBox text={ 'abcdefg' } position={ 2 } />)
  expect(wrapper.find('.is-pointed').length).toBe(1)
  expect(wrapper.find('.is-pointed').text()).toBe('c')
})
