import ScreenCapture from './screen_capture'
import DragZoom from './drag_zoom'

export default function install (Vue) {
  Vue.use(ScreenCapture)
  Vue.use(DragZoom)
}
