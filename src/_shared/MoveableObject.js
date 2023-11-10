export const MoveableObject = ({ canvas, controls }) => {
  const acceleration = 6
  const position = { x: 0, y: 0, rotation: 0 }

  const init = () => {
    position.x = window.innerWidth / 2
    position.y = window.innerHeight / 2
  }

  const run = () => {
    const { up, right, down, left } = controls

    switch (true) {
      case up():
        position.y -= acceleration
        break
      case down():
        position.y += acceleration
        break
      default:
        break
    }

    switch (true) {
      case right():
        position.x += acceleration
        break
      case left():
        position.x -= acceleration
        break
      default:
        break
    }

    canvas.drawRect(position.x, position.y, 20, 20, {
      fillStyle: 'black',
    })
  }

  return {
    init,
    run,
  }
}
