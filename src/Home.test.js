import test      from 'ava'
import {shallow} from 'enzyme'
import React     from 'react'

import Home from './Home'

test('Renders correctly', (t) => {
  const wrapper = shallow(<Home />)
  t.pass()
})
