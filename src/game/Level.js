export const Level = ({ canvas, spaceship, car }) => {
  const init = () => {
    spaceship.init()
    car.init()
  }

  const run = () => {
    canvas.erase()
    car.run()
  }

  return {
    init,
    run,
  }
}
