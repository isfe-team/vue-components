import ScreenCapturePresenter from './screen_capture/ScreenCapturePresenter'

export default function install (Vue) {
  Vue.component(ScreenCapturePresenter.name, ScreenCapturePresenter)
}
