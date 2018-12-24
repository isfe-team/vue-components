[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![](/travis/com/isfe-team/vue-components.svg)](https://travis-ci.com/isfe-team/vue-components)
[![](/github/license/isfe-team/vue-components.svg)](https://opensource.org/licenses/MIT)
[![](/npm/v/@isfe/vue-components.svg)](https://www.npmjs.com/package/@isfe/vue-components)

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
