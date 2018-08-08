let container = null

const restoreVideo = selector => {
  if (!document.body.contains(selector)) {
    container.insertAdjacentElement('afterbegin', selector)
  }
}

const removeVideo = selector => {
  if (container === null) {
    container = selector.parentNode
  }

  if (document.body.contains(selector)) {
    container.removeChild(selector)
  }
}

export {
  restoreVideo,
  removeVideo
}
