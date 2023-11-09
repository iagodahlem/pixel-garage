export const Game = ({ canvas, controls, pointer, level }) => {
  let time = 0
  let previousTime = 0

  const init = () => {
    previousTime = Date.now()

    canvas.init()
    controls.init()
    pointer.init()
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
