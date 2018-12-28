/*!
 * dom utilities, include `class`, `addEventListenerWrapper`
 * bqliu
 */

import addDomEventListener from 'add-dom-event-listener'

/**
 * add class in an element, use [classList](https://caniuse.com/#search=classList)
 * @param {HTMLElement} $el
 * @param {string} className
 */
export function addClass ($el, className) {
  if (!className || !className.trim()) {
    return
  }
  $el.classList.add(className)
}

/**
 * remove class in an element, use [classList](https://caniuse.com/#search=classList)
 * @param {AudioNodeOptions} $el
 * @param {string} className
 */
export function removeClass ($el, className) {
  if (!className || !className.trim()) {
    return
  }
  $el.classList.remove(className)
}

/**
 * addEventListener wrapper for [add-dom-event-listener](https://www.npmjs.com/package/add-dom-event-listener)
 * @param {HTMLElement} $el
 * @param {string} eventType
 * @param {Function} callback
 * @param {Object|boolean|void} [option=false]
 * @return {{remove: Function}} an object with a remove handler
 */
export function addEventListenerWrapper ($el, eventType, callback, option) {
  return addDomEventListener($el, eventType, callback, option)
}

/**
 * zoom element
 * @param {HTMLElement} $el
 * @param {number} zoom
 * @param {[number, number]} [transformOrigin=[0, 0]]
 */
export function zoomEl ($el, zoom, transformOrigin = [ 0, 0 ]) {
  const browserPrefixes = [ 'webkit', 'moz', 'ms', 'o' ]
  const scaleString = `scale(${zoom})`
  const originString = `${transformOrigin[0] * 100}% ${transformOrigin[1] * 100}%`
  const elStyle = $el.style

  browserPrefixes.forEach(prefix => {
    elStyle[`${prefix}Transform`] = scaleString
    elStyle[`${prefix}TransformOrigin`] = originString
  })

  elStyle.transform = scaleString
  elStyle.transformOrigin = originString
}
