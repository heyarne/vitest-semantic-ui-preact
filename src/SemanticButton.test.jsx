import { beforeEach, describe, expect, test, vi } from 'vitest'
import { h } from 'preact'
import { shallow, mount } from 'enzyme';

import SemanticButton from './SemanticButton'

describe('SemanticButton', () => {
  test('should mount component', () => {
    const wrapper = mount(<SemanticButton />)
    expect(wrapper.text()).to.include('Click here')
  })
})
