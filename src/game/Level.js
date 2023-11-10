export const Level = ({ canvas, controls, spaceship }) => {
  const init = () => {
    spaceship.init()
  }

  const run = () => {
    spaceship.run()
  }

  return {
    init,
    run,
  }
}
