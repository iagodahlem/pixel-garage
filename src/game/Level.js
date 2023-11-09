export const Level = ({ canvas, controls }) => {
  let spaceship

  const init = () => {
    spaceship = Spaceship({ canvas, controls })
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

const Spaceship = ({ canvas, controls }) => {
  const acceleration = 6
  const position = { x: 0, y: 0, rotation: 0 }
  let isAccelerating = false

  const pixelSize = 3
  const gridSize = 13
  const totalSize = pixelSize * gridSize

  let grid

  const init = () => {
    position.x = window.innerWidth / 2
    position.y = window.innerHeight / 2

    grid = Array.from(Array(gridSize), () => Array(gridSize).fill(0)).map(
      (row, rowIndex) =>
        row.map((column, columnIndex) => ({
          x: columnIndex * pixelSize + (position.x - totalSize / 2),
          y: rowIndex * pixelSize + (position.y - totalSize / 2),
        }))
    )
  }

  const run = () => {
    const { up, right, down, left } = controls

    isAccelerating = up() ? true : false

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
        position.rotation -= 1
        break
      case left():
        position.rotation += 1
        break
      default:
        break
    }

    grid = Array.from(Array(gridSize), () => Array(gridSize).fill(0)).map(
      (row, rowIndex) =>
        row.map((column, columnIndex) => ({
          x: columnIndex * pixelSize + (position.x - totalSize / 2),
          y: rowIndex * pixelSize + (position.y - totalSize / 2),
        }))
    )

    canvas.erase()

    drawPixel(grid[0][6].x, grid[0][6].y, '#BFBCEE')

    drawPixel(grid[1][5].x, grid[1][5].y, '#BFBCEE')
    drawPixel(grid[1][6].x, grid[1][6].y, '#A6A4D0')
    drawPixel(grid[1][7].x, grid[1][7].y, '#847EBD')

    drawPixel(grid[2][4].x, grid[2][4].y, '#847EBD')
    drawPixel(grid[2][5].x, grid[2][5].y, '#BFBCEE')
    drawPixel(grid[2][6].x, grid[2][6].y, '#96C5DD')
    drawPixel(grid[2][7].x, grid[2][7].y, '#847EBD')
    drawPixel(grid[2][8].x, grid[2][8].y, '#BFBCEE')

    drawPixel(grid[3][2].x, grid[3][2].y, '#BFBCEE')
    drawPixel(grid[3][3].x, grid[3][3].y, '#A6A4D0')
    drawPixel(grid[3][4].x, grid[3][4].y, '#847EBD')
    drawPixel(grid[3][5].x, grid[3][5].y, '#BFBCEE')
    drawPixel(grid[3][6].x, grid[3][6].y, '#A6A4D0')
    drawPixel(grid[3][7].x, grid[3][7].y, '#847EBD')
    drawPixel(grid[3][8].x, grid[3][8].y, '#BFBCEE')
    drawPixel(grid[3][9].x, grid[3][9].y, '#A6A4D0')
    drawPixel(grid[3][10].x, grid[3][10].y, '#A6A4D0')

    drawPixel(grid[4][1].x, grid[4][1].y, '#A6A4D0')
    drawPixel(grid[4][2].x, grid[4][2].y, '#A6A4D0')
    drawPixel(grid[4][3].x, grid[4][3].y, '#A6A4D0')
    drawPixel(grid[4][4].x, grid[4][4].y, '#847EBD')
    drawPixel(grid[4][5].x, grid[4][5].y, '#BFBCEE')
    drawPixel(grid[4][6].x, grid[4][6].y, '#A6A4D0')
    drawPixel(grid[4][7].x, grid[4][7].y, '#847EBD')
    drawPixel(grid[4][8].x, grid[4][8].y, '#BFBCEE')
    drawPixel(grid[4][9].x, grid[4][9].y, '#A6A4D0')
    drawPixel(grid[4][10].x, grid[4][10].y, '#A6A4D0')
    drawPixel(grid[4][11].x, grid[4][11].y, '#847EBD')

    drawPixel(grid[5][0].x, grid[5][0].y, '#A6A4D0')
    drawPixel(grid[5][1].x, grid[5][1].y, '#715CBC')
    drawPixel(grid[5][2].x, grid[5][2].y, '#715CBC')
    drawPixel(grid[5][3].x, grid[5][3].y, '#715CBC')
    drawPixel(grid[5][4].x, grid[5][4].y, '#5B4190')
    drawPixel(grid[5][5].x, grid[5][5].y, '#A6A4D0')
    drawPixel(grid[5][6].x, grid[5][6].y, '#A6A4D0')
    drawPixel(grid[5][7].x, grid[5][7].y, '#847EBD')
    drawPixel(grid[5][8].x, grid[5][8].y, '#715CBC')
    drawPixel(grid[5][9].x, grid[5][9].y, '#715CBC')
    drawPixel(grid[5][10].x, grid[5][10].y, '#715CBC')
    drawPixel(grid[5][11].x, grid[5][11].y, '#715CBC')
    drawPixel(grid[5][12].x, grid[5][12].y, '#715CBC')

    drawPixel(grid[6][3].x, grid[6][3].y, '#5B4190')
    drawPixel(grid[6][4].x, grid[6][4].y, '#5B4190')
    drawPixel(grid[6][5].x, grid[6][5].y, '#847EBD')
    drawPixel(grid[6][6].x, grid[6][6].y, '#847EBD')
    drawPixel(grid[6][7].x, grid[6][7].y, '#847EBD')
    drawPixel(grid[6][8].x, grid[6][8].y, '#5B4190')
    drawPixel(grid[6][9].x, grid[6][9].y, '#5B4190')

    // flames
    if (isAccelerating) {
      drawPixel(grid[7][3].x, grid[7][3].y, '#7E1B70')
      drawPixel(grid[7][4].x, grid[7][4].y, '#EE7A6A')
      drawPixel(grid[7][5].x, grid[7][5].y, '#F09E70')
      drawPixel(grid[7][6].x, grid[7][6].y, '#F09E70')
      drawPixel(grid[7][7].x, grid[7][7].y, '#F09E70')
      drawPixel(grid[7][8].x, grid[7][8].y, '#EE7A6A')
      drawPixel(grid[7][9].x, grid[7][9].y, '#7E1B70')

      drawPixel(grid[8][3].x, grid[8][3].y, '#340A5E')
      drawPixel(grid[8][4].x, grid[8][4].y, '#DE4B68')
      drawPixel(grid[8][5].x, grid[8][5].y, '#EE7A6A')
      drawPixel(grid[8][6].x, grid[8][6].y, '#F09E70')
      drawPixel(grid[8][7].x, grid[8][7].y, '#EE7A6A')
      drawPixel(grid[8][8].x, grid[8][8].y, '#DE4B68')
      drawPixel(grid[8][9].x, grid[8][9].y, '#340A5E')

      drawPixel(grid[9][4].x, grid[9][4].y, '#7E1B70')
      drawPixel(grid[9][5].x, grid[9][5].y, '#DE4B68')
      drawPixel(grid[9][6].x, grid[9][6].y, '#EE7A6A')
      drawPixel(grid[9][7].x, grid[9][7].y, '#DE4B68')
      drawPixel(grid[9][8].x, grid[9][8].y, '#7E1B70')

      drawPixel(grid[10][4].x, grid[10][4].y, '#340A5E')
      drawPixel(grid[10][5].x, grid[10][5].y, '#7E1B70')
      drawPixel(grid[10][6].x, grid[10][6].y, '#DE4B68')
      drawPixel(grid[10][7].x, grid[10][7].y, '#7E1B70')
      drawPixel(grid[10][8].x, grid[10][8].y, '#340A5E')

      drawPixel(grid[11][5].x, grid[11][5].y, '#340A5E')
      drawPixel(grid[11][6].x, grid[11][6].y, '#7E1B70')
      drawPixel(grid[11][7].x, grid[11][7].y, '#340A5E')

      drawPixel(grid[12][6].x, grid[12][6].y, '#340A5E')
    }
  }

  const drawPixel = (x, y, color) => {
    canvas.drawRect(x, y, pixelSize, pixelSize, {
      fillStyle: color,
    })
  }

  return {
    init,
    run,
  }
}

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
