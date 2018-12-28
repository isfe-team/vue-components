<p align="center">
  <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg"></a>
  <a href="https://travis-ci.com/isfe-team/vue-components"><img src="https://img.shields.io/travis/com/isfe-team/vue-components.svg"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/isfe-team/vue-components.svg"></a>
  <a href="https://npmcharts.com/compare/@isfe/vue-components?minimal=true&interval=30"><img src="https://img.shields.io/npm/dm/@isfe/vue-components.svg"></a>

</p>

# Vue Components

Common vue components for biz. [@isfe](https://github.com/isfe-team/) [@isfe/vue-components](https://isfe-team/github.io/vue-components).

## Usage

### Install

```sh
$ npm i -S @isfe/vue-components
```

### Use components

```js
// import all components
import VueComponents from '@isfe/vue-components'

Vue.use(VueComponents)
```

```js
// or import what you need
import ScreenCapture from '@isfe/vue-components/components'

// if you want to register in global
Vue.use(ScreenCapture)

// or you want to use like a component

export default {
  name: 'Wrapper',
  render () {
    return <ScreenCapture />
  }
}
```

## For developers

```sh
$ npm i
# use this to commit
$ npm run commit
# upgrade versions and tag
$ npm version <param>
$ git push origin --tag
```

## TODOs

- [x] publish
- [x] linter
- [ ] tests
- [x] `README.md` 直接在 `docs:x` scripts 之前 move 到 `docs` 中
- [ ] DragZoom component
