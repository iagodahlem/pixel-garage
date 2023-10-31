export const Game = ({ canvas, pointer, level }) => {
  let previousTime = 0

  const init = () => {
    previousTime = Date.now()

    pointer.init()
    canvas.init()
    level.init()

    run()
  }

  const run = () => {
    const currentTime = Date.now()
    time = (currentTime - previousTime) / 1000
    previousTime = currentTime

    level.run()

    requestAnimationFrame(run)
  }

  return { init }
}
