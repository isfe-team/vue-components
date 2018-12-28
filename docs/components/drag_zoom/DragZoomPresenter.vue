<template>
  <div id="presenter">
    <slot />
    <DragZoom
      :before-zoom="onBeforeZoom"
      :on-zoom-disabled="onZoomDisabled"
      :after-zoom="onAfterZoom"
      class="drag-zoom"
    >
      <div class="inner">
        哈哈哈
        <br>
        hahahaha
      </div>
    </DragZoom>
    <ul class="logger">
      <li v-for="(log, index) in logList" :key="index">{{ log.type }}：{{ log.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DragZoomPresenter",
  data() {
    return {
      logList: [ ]
    };
  },
  methods: {
    log (type, content) {
      this.logList.push({ type, content })
    },
    onBeforeZoom (zoom) {
      this.log('before zoom:', zoom)
    },
    onAfterZoom (zoom) {
      this.log('after zoom:', zoom)
    },
    onZoomDisabled (range) {
      this.log('zoom disabled:', range)
    }
  }
};
</script>

<style scoped lang="stylus">
#presenter
  display flex
  width 800px

  .drag-zoom
    width 600px
    height 400px
    overflow auto

    .inner
      width 1200px
      height 800px
</style>

<style>
.user-select-defeat {
  user-select: none
}
</style>

