export const CarLevel = ({ canvas, car }) => {
  const init = () => {
    car.init()
  }

  const run = () => {
    canvas.erase({ fillStyle: 'gray' })
    car.run()
  }

  return {
    init,
    run,
  }
}
