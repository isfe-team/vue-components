import ScreenCapturePresenter from './screen_capture/ScreenCapturePresenter'
import DragZoomPresenter from './drag_zoom/DragZoomPresenter'

export default function install (Vue) {
  Vue.component(ScreenCapturePresenter.name, ScreenCapturePresenter)
  Vue.component(DragZoomPresenter.name, DragZoomPresenter)
}
