export const Menu = ({ canvas }) => {
  const init = () => {}

  const run = () => {
    canvas.context().fillStyle = '#ffaaaa'
    canvas.context().fillRect(0, 0, 200, 200)
    canvas.context().fillStyle = '#000000'
    canvas.context().font = '20px _sans'
    canvas.context().textBaseline = 'top'
    canvas.context().fillText('Canvas!', 0, 0)
  }

  return {
    init,
    run,
  }
}
