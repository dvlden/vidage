import '../styles/vidage.scss'
import debounce from 'lodash-es/debounce'
import assign from 'lodash-es/assign'
import validateSelector from './helpers/validate-selector'
import detectTouchOrSmallScreen from './helpers/feature-detect'
import { restoreVideo, removeVideo } from './helpers/handle-video-selector'
import defaults from './helpers/defaults'

export default class Vidage {
  constructor (selector, options = {}) {
    this.options = assign(defaults, options)
    this._name = this.constructor.name
    this.element = validateSelector(selector, this._name)

    this.init()
  }

  init () {
    if (this.element.readyState >= this.element.HAVE_FUTURE_DATA) {
      this.handler()
    }
    else {
      this.element.addEventListener('canplay', () => {
        this.handler()
      })
    }

    window.addEventListener('resize', debounce(() => {
      this.handler(), 250
    }))
  }

  handler () {
    const body = document.body

    if (detectTouchOrSmallScreen()) {
      this.element.pause()

      if (this.options.videoRemoval) {
        removeVideo(this.element)
      }

      body.classList.remove(this.options.helperClass)
    }
    else {
      if (this.options.videoRemoval) {
        restoreVideo(this.element)
      }

      this.element.play()

      body.classList.add(this.options.helperClass)
    }
  }
}
