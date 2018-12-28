<template>
  <div
    class="drag-zoom-wrapper"
    :class="{ moving: isMoving }"
    @wheel.alt.exact.stop.prevent="handleWheel($event)"
    @scroll="handleScroll($event)"
    @mousedown="handleMouseDown($event)">
    <slot></slot>
  </div>
</template>

<script>
  import { noop } from '../_utils'
  import { zoomEl, addClass, removeClass } from '../_utils/dom'

  export default {
    name: 'DragZoom',
    props: {
      initialZoom: { type: Number, default: 1 },
      zoomDelta: { type: Number, default: 0.1 },
      minZoom: { type: Number, default: 0.2 },
      maxZoom: { type: Number, default: 4 },
      beforeZoom: { type: Function, default: noop },
      afterZoom: { type: Function, default: noop },
      onZoomDisabled: { type: Function, default: noop }
    },
    data () {
      return {
        currentZoom: this.initialZoom,
        isMoving: false,
        currentPosition: { },
        mounted: false
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.mounted = true
      })
    },
    methods: {
      getChildWrapperDOM () {
        return this.mounted ? this.$el.firstElementChild : null
      },
      setZoom (zoom = 1) {
        const el = this.getChildWrapperDOM()
        if (!el) {
          return
        }
        this.beforeZoom(zoom)
        zoomEl(el, zoom)
        this.afterZoom(zoom)
      },
      getZoom () {
        return this.zoom
      },
      move (dx = 0, dy = 0) {
        // moving direction is the opposite direction of deltaX/Y
        const { $el } = this
        $el.scrollLeft += -1 * dx
        $el.scrollTop += -1 * dy
      },
      handleWheel ({ wheelDeltaY }) {
        let zoomDelta = 0
        let needZoom = true
        if (wheelDeltaY < 0 && this.currentZoom > this.minZoom) {
          zoomDelta = -1 * this.zoomDelta
        } else if (wheelDeltaY > 0 && this.currentZoom < this.maxZoom) {
          zoomDelta = this.zoomDelta
        } else {
          needZoom = false
        }
        if (!needZoom) {
          this.onZoomDisabled({ minZoom: this.minZoom, maxZoom: this.maxZoom })
          return
        }
        this.currentZoom += zoomDelta
        this.setZoom(this.currentZoom)
      },
      handleMouseDown ({ pageX, pageY }) {
        const currentPosition = { pageX, pageY }
        this.currentPosition = currentPosition
        const $html = document.documentElement

        const mouseMoveHandler = ({ movementX, movementY, pageX, pageY }) => {
          if (!this.isMoving) {
            addClass(document.body, 'user-select-defeat')
          }
          this.isMoving = true
          const deltaX = movementX || pageX - this.currentPosition.pageX
          const deltaY = movementY || pageY - this.currentPosition.pageY
          const currentPosition = { pageX, pageY }
          this.currentPosition = currentPosition

          this.move(deltaX, deltaY)
        }

        const mouseUpHandler = evt => {
          this.isMoving = false
          removeClass(document.body, 'user-select-defeat')
          $html.removeEventListener('mousemove', mouseMoveHandler)
          $html.removeEventListener('mouseup', mouseUpHandler)
        }

        $html.addEventListener('mousemove', mouseMoveHandler)
        $html.addEventListener('mouseup', mouseUpHandler)
      },
      /* 用不到，只是放在这 */
      handleScroll (evt) { }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .drag-zoom-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    cursor: move;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }

  .drag-zoom-wrapper.moving {
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
</style>
