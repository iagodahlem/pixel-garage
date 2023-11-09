export const Controls = () => {
  const keyCodes = {
    W: 87,
    D: 68,
    S: 83,
    A: 65,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    LEFT: 37,
  }

  const directions = { up: false, right: false, down: false, left: false }

  const init = () => {
    window.addEventListener('keydown', setDirectionsTo(true))
    window.addEventListener('keyup', setDirectionsTo(false))
  }

  const setDirectionsTo =
    (to) =>
    ({ keyCode }) => {
      switch (true) {
        case keyCode === keyCodes.W:
        case keyCode === keyCodes.UP:
          directions.up = to
          break

        case keyCode === keyCodes.D:
        case keyCode === keyCodes.RIGHT:
          directions.right = to
          break

        case keyCode === keyCodes.S:
        case keyCode === keyCodes.DOWN:
          directions.down = to
          break

        case keyCode === keyCodes.A:
        case keyCode === keyCodes.LEFT:
          directions.left = to
          break

        default:
          return
      }
    }

  return {
    init,
    up: () => directions.up,
    right: () => directions.right,
    down: () => directions.down,
    left: () => directions.left,
  }
}
