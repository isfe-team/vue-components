# Drag Zoom

一个简单的支持内部元素可拖拽移动位置的组件，且支持缩放（暂时只支持 `alt` + `mousewheel`），后续可能支持额外的 `key` 支持。

### Usage

```vue
<DragZoom
  :initial-zoom="initialZoom"
  :zoom-delta="zoomDelta"
  :min-zoom="minZoom"
  :max-zoom="maxZoom"
  :before-zoom="onBeforeZoom"
  :on-zoom-disabled="onZoomDisabled"
  :after-zoom="onAfterZoom"
  class="drag-zoom"
>
  <SomeOtherElements />
</DragZoom>
```

为了更好的效果，建议增加一个全局样式：
```css
.user-select-defeat {
  user-select: none
}
```

演示：

<DragZoomPresenter />
