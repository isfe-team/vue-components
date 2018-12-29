/* global describe, it, expect */

import { mount } from '@vue/test-utils'
import DragZoom from '@/drag_zoom'

describe('DragZoom', () => {
  it('is a vue instance', () => {
    const wrapper = mount(DragZoom)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
