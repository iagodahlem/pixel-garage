export const Game = ({
  canvas,
  controls,
  pointer,
  carLevel,
  spaceshipLevel,
}) => {
  let time = 0
  let previousTime = 0
  let level

  const levelsMap = {
    carLevel,
    spaceshipLevel,
  }

  const init = () => {
    previousTime = Date.now()

    const query = new URLSearchParams(window.location.search)

    level = levelsMap[query.get('level')]

    if (!level) {
      throw new Error(`Level ${query.get('level')} not found`)
    }

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
