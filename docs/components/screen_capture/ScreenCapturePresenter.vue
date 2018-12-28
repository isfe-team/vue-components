<template>
  <div id="presenter">
    <ScreenCapture class="capture" @captured="present" :z-index="10000">
      <img class="capture-camera" alt="capture" src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMuMiIvPgogICAgPHBhdGggZD0iTTkgMkw3LjE3IDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDJIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo=">
    </ScreenCapture>
    <dialog class="dialog capture-result" ref="captureResultDialog">
      <h3 class="dialog-header">截图结果</h3>
      <div class="dialog-content">
        <img :src="src">
      </div>
      <div class="dialog-footer dialog-operations">
        <button @click="closeDialog" class="dialog-operation dialog-operation-close">关闭</button>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "ScreenCapturePresenter",
  data() {
    return {
      src: undefined
    };
  },
  methods: {
    present ({ error, imageData }) {
      if (error) {
        console.error('Capture error', error)
        return
      }
      this.src = imageData
      this.$refs.captureResultDialog.showModal()
    },
    closeDialog () {
      this.$refs.captureResultDialog.close()
    }
  }
};
</script>

<style scoped lang="stylus">
#presenter
  position fixed
  right 50px
  bottom 50px
  border-radius 50%
  z-index 100

  .capture
    display flex
    width 40px
    height 40px
    border-radius 50%
    transition transform .2s
    background mediumseagreen
    cursor pointer

    &:hover
      transform scale(1.5)

    .capture-camera
      margin auto

  .capture-result[open]
    position fixed
    top 40%
    left 50%
    display flex
    flex-direction column
    justify-content center
    width 600px
    height 400px
    transform translateY(-50%) translateX(-50%)
    z-index 10001
    overflow hidden
    border none
    box-shadow 0 0 10px #000
    border-radius 2px

    &::backdrop
      background rgba(0, 0, 0, .5)

    .dialog-header
      width 100%
      line-height 40px
      margin 0
      font-weight 500
      font-size 20px
      border-bottom: 1px solid #eee

    .dialog-content
      flex 1
      overflow auto

      img
        width auto
        height auto
        max-width auto
        max-height auto
        margin-top 20px
        border 1px solid green

    .dialog-operations
      display flex
      align-items center
      justify-content flex-end
      width 100%
      height 40px

      .dialog-operation
        height 30px
        padding 0 2em
        margin-right 20px
        outline none
        background #fff
        border none
        border-radius 2px
        cursor pointer

        &:last-child
          margin-right 0

        &.dialog-operation-close
          background lightblue
          letter-spacing 2px
</style>
