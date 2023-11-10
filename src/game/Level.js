export const Level = ({ canvas, spaceship }) => {
  const init = () => {
    spaceship.init()
  }

  const run = () => {
    canvas.erase()
    spaceship.run()
  }

  return {
    init,
    run,
  }
}
