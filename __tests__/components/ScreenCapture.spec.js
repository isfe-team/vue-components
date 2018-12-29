/* global describe, it, expect */

import { mount } from '@vue/test-utils'
import ScreenCapture from '@/screen_capture'

describe('ScreenCapture', () => {
  it('is a vue instance', () => {
    const wrapper = mount(ScreenCapture)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
