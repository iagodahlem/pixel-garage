export const SpaceshipLevel = ({ canvas, spaceship }) => {
  const init = () => {
    spaceship.init()
  }

  const run = () => {
    canvas.erase({ fillStyle: 'black' })
    spaceship.run()
  }

  return {
    init,
    run,
  }
}
