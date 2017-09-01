import test      from 'ava'
import {shallow} from 'enzyme'
import React     from 'react'

import Accounts from './Accounts'

test('Renders correctly', (t) => {
  const wrapper = shallow(<Accounts />)
  t.pass()
})
