import test      from 'ava'
import {shallow} from 'enzyme'
import React     from 'react'

import BookwerxApp from './BookwerxApp'

test('Renders correctly', (t) => {
  const wrapper = shallow(<BookwerxApp />)
  t.pass()
})
