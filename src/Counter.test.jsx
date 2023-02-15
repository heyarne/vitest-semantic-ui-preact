import { beforeEach, describe, expect, test, vi } from 'vitest'
import { h } from 'preact'
import { shallow, mount } from 'enzyme';

import Counter from './Counter'

describe('Counter', () => {
  test('should display initial count', () => {
    const wrapper = mount(<Counter initialCount={5} />)
    expect(wrapper.text()).to.include('Current value: 5')
  })

  test('should increment after "Increment" button is clicked', () => {
    const wrapper = mount(<Counter initialCount={5} />)

    wrapper.find('button').simulate('click')

    expect(wrapper.text()).to.include('Current value: 6')
  })
})
