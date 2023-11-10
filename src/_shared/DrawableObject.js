export const DrawableObject = ({ canvas, pointer }) => {
  const init = () => {}

  const run = () => {
    canvas.drawCircle(pointer.x(), pointer.y(), 10, 0, Math.PI * 2, {
      fillStyle: 'red',
    })
  }

  return {
    init,
    run,
  }
}
