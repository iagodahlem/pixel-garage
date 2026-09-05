export const Controls = () => {
  const codes = {
    KeyW: 'up',
    ArrowUp: 'up',
    KeyD: 'right',
    ArrowRight: 'right',
    KeyS: 'down',
    ArrowDown: 'down',
    KeyA: 'left',
    ArrowLeft: 'left',
  }

  const directions = { up: false, right: false, down: false, left: false }

  const init = () => {
    window.addEventListener('keydown', setDirectionsTo(true))
    window.addEventListener('keyup', setDirectionsTo(false))
  }

  const setDirectionsTo =
    (to) =>
    ({ code }) => {
      const direction = codes[code]

      if (!direction) return

      directions[direction] = to
    }

  return {
    init,
    up: () => directions.up,
    right: () => directions.right,
    down: () => directions.down,
    left: () => directions.left,
  }
}
