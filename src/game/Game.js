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
  let levelName

  const levelsMap = {
    car: carLevel,
    spaceship: spaceshipLevel,
  }

  const levelAliases = {
    car: 'car',
    carLevel: 'car',
    spaceship: 'spaceship',
    spaceshipLevel: 'spaceship',
  }

  const init = () => {
    previousTime = Date.now()

    canvas.init()
    controls.init()
    pointer.init()

    const query = new URLSearchParams(window.location.search)
    switchLevel(query.get('level'))

    run()
  }

  const switchLevel = (name) => {
    levelName = levelAliases[name] || 'spaceship'
    level = levelsMap[levelName]
    level.init()
  }

  const run = () => {
    const currentTime = Date.now()
    time = (currentTime - previousTime) / 1000
    previousTime = currentTime

    level.run()

    requestAnimationFrame(run)
  }

  return {
    init,
    switchLevel,
    currentLevel: () => levelName,
  }
}
