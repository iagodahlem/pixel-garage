export const Game = () => {
  let previousTime = 0

  const init = () => {
    previousTime = Date.now()
    canvas.init()

    run()
  }

  const run = () => {
    const currentTime = Date.now()
    time = (currentTime - previousTime) / 1000
    previousTime = currentTime

    requestAnimationFrame(run)
  }

  return { init }
}

export const Canvas = () => {
  let canvas
  let context

  const init = () => {
    canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')

    setScreenSize()
  }

  const setScreenSize = () => {
    const width = window.innerWidth
    const height = window.innerHeight

    canvas.width = width
    canvas.height = height
  }

  return {
    init,
  }
}

export const canvas = Canvas()
