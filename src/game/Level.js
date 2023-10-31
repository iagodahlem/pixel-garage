export const Level = ({ canvas, pointer }) => {
  const init = () => {}

  const run = () => {
    canvas.drawRect(0, 0, window.innerWidth, window.innerHeight, {
      fillStyle: 'white',
    })
    canvas.drawCircle(pointer.x(), pointer.y(), 10, 0, Math.PI * 2, {
      fillStyle: 'red',
    })
  }

  return {
    init,
    run,
  }
}
