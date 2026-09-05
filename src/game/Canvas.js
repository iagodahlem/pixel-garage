export const Canvas = () => {
  let canvas
  let context

  const init = () => {
    canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')

    window.addEventListener('resize', setScreenSize)

    setScreenSize()
  }

  const setScreenSize = () => {
    const width = window.innerWidth
    const height = window.innerHeight

    canvas.width = width
    canvas.height = height
  }

  const drawCircle = (x, y, radius, startAngle, endAngle, options = {}) => {
    Object.assign(context, options)

    context.beginPath()
    context.arc(x, y, radius, startAngle, endAngle)
    context.closePath()
    context.fill()
  }

  const drawRect = (x, y, w, h, options = {}) => {
    Object.assign(context, options)

    context.beginPath()
    context.rect(x, y, w, h)
    context.closePath()
    context.fill()
  }

  const erase = (options = {}) => {
    drawRect(0, 0, window.innerWidth, window.innerHeight, {
      fillStyle: '#ffffff',
      ...options,
    })
  }

  const createLayer = () => {
    const layerCanvas = document.createElement('canvas')
    layerCanvas.width = canvas.width
    layerCanvas.height = canvas.height

    const layerContext = layerCanvas.getContext('2d')

    const layerDrawRect = (x, y, w, h, options = {}) => {
      Object.assign(layerContext, options)

      layerContext.beginPath()
      layerContext.rect(x, y, w, h)
      layerContext.closePath()
      layerContext.fill()
    }

    return {
      context: () => layerContext,
      drawRect: layerDrawRect,
      width: () => layerCanvas.width,
      height: () => layerCanvas.height,
      element: () => layerCanvas,
    }
  }

  return {
    init,
    context: () => context,
    erase,
    drawCircle,
    drawRect,
    createLayer,
    width: () => canvas.width,
    height: () => canvas.height,
  }
}
