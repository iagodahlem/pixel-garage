export const Pointer = () => {
  const coordinates = { x: 0, y: 0 }

  const init = () => {
    window.addEventListener('mousemove', setCoordinates)
  }

  const setCoordinates = (event) => {
    coordinates.x = event.pageX
    coordinates.y = event.pageY
  }

  return {
    init,
    x: () => coordinates.x,
    y: () => coordinates.y,
  }
}
