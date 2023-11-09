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

  const erase = () => {
    drawRect(0, 0, window.innerWidth, window.innerHeight, {
      fillStyle: 'black',
    })
  }

  return {
    init,
    context: () => context,
    erase,
    drawCircle,
    drawRect,
  }
}
