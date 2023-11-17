import { pixelSize } from '../../_shared/config'
import { Grid } from '../../_shared/Grid'

export const Spaceship = ({ canvas, controls }) => {
  const acceleration = 0.5
  const deceleration = 0.05
  const rotationSpeed = 4
  const maxSpeed = 10

  const position = {
    x: 0,
    y: 0,
    rotation: 0,
    facingX: 0,
    facingY: 0,
    movingX: 0,
    movingY: 0,
    angle: 0,
    speed: 0,
  }

  let isAccelerating = false
  let isRotating = false

  let spaceShipGrid

  const init = () => {
    position.x = window.innerWidth / 2
    position.y = window.innerHeight / 2

    calculateGrid()
  }

  const run = () => {
    const { up, right, left } = controls

    isAccelerating = up()
    isRotating = right() || left()

    calculateRotation()
    calculateMovement()
    calculatePosition()
    calculateGrid()

    draw()
  }

  const calculateGrid = () => {
    spaceShipGrid = Grid({ gridSize: 13 }).matrix({
      x: position.x,
      y: position.y,
    })
  }

  const calculateRotation = () => {
    const { right, left } = controls

    if (isRotating) {
      switch (true) {
        case right():
          position.rotation += rotationSpeed
          break
        case left():
          position.rotation -= rotationSpeed
          break
        default:
          break
      }

      position.angle = (position.rotation * Math.PI) / 180
    }
  }

  const calculateMovement = () => {
    position.facingX = Math.cos(position.angle)
    position.facingY = Math.sin(position.angle)

    if (isAccelerating) {
      const movingX = position.movingX + acceleration * position.facingY
      const movingY = position.movingY + acceleration * -position.facingX

      position.speed = Math.sqrt(movingX * movingX + movingY * movingY)

      if (position.speed < maxSpeed) {
        position.movingX = movingX
        position.movingY = movingY
      }
    } else {
      if (position.movingX !== 0) {
        position.movingX = position.movingX - deceleration * position.movingX
      }

      if (position.movingY !== 0) {
        position.movingY = position.movingY - deceleration * position.movingY
      }
    }
  }

  const calculatePosition = () => {
    position.x += position.movingX
    position.y += position.movingY

    if (position.x > canvas.width()) {
      position.x = 0
    } else if (position.y < 0) {
      position.y = canvas.height()
    }

    if (position.y > canvas.height()) {
      position.y = 0
    } else if (position.x < 0) {
      position.x = canvas.width()
    }
  }

  const draw = () => {
    canvas.context().save()

    rotateShip()
    drawShip()

    if (isAccelerating) {
      drawFlames()
    }

    canvas.context().restore()
  }

  const rotateShip = () => {
    canvas.context().translate(spaceShipGrid[6][6].x, spaceShipGrid[6][6].y)
    canvas.context().rotate(position.angle)
    canvas.context().translate(-spaceShipGrid[6][6].x, -spaceShipGrid[6][6].y)
  }

  const drawShip = () => {
    drawPixel(spaceShipGrid[0][6].x, spaceShipGrid[0][6].y, '#BFBCEE')

    drawPixel(spaceShipGrid[1][5].x, spaceShipGrid[1][5].y, '#BFBCEE')
    drawPixel(spaceShipGrid[1][6].x, spaceShipGrid[1][6].y, '#A6A4D0')
    drawPixel(spaceShipGrid[1][7].x, spaceShipGrid[1][7].y, '#847EBD')

    drawPixel(spaceShipGrid[2][4].x, spaceShipGrid[2][4].y, '#847EBD')
    drawPixel(spaceShipGrid[2][5].x, spaceShipGrid[2][5].y, '#BFBCEE')
    drawPixel(spaceShipGrid[2][6].x, spaceShipGrid[2][6].y, '#96C5DD')
    drawPixel(spaceShipGrid[2][7].x, spaceShipGrid[2][7].y, '#847EBD')
    drawPixel(spaceShipGrid[2][8].x, spaceShipGrid[2][8].y, '#BFBCEE')

    drawPixel(spaceShipGrid[3][2].x, spaceShipGrid[3][2].y, '#BFBCEE')
    drawPixel(spaceShipGrid[3][3].x, spaceShipGrid[3][3].y, '#A6A4D0')
    drawPixel(spaceShipGrid[3][4].x, spaceShipGrid[3][4].y, '#847EBD')
    drawPixel(spaceShipGrid[3][5].x, spaceShipGrid[3][5].y, '#BFBCEE')
    drawPixel(spaceShipGrid[3][6].x, spaceShipGrid[3][6].y, '#A6A4D0')
    drawPixel(spaceShipGrid[3][7].x, spaceShipGrid[3][7].y, '#847EBD')
    drawPixel(spaceShipGrid[3][8].x, spaceShipGrid[3][8].y, '#BFBCEE')
    drawPixel(spaceShipGrid[3][9].x, spaceShipGrid[3][9].y, '#A6A4D0')
    drawPixel(spaceShipGrid[3][10].x, spaceShipGrid[3][10].y, '#A6A4D0')

    drawPixel(spaceShipGrid[4][1].x, spaceShipGrid[4][1].y, '#A6A4D0')
    drawPixel(spaceShipGrid[4][2].x, spaceShipGrid[4][2].y, '#A6A4D0')
    drawPixel(spaceShipGrid[4][3].x, spaceShipGrid[4][3].y, '#A6A4D0')
    drawPixel(spaceShipGrid[4][4].x, spaceShipGrid[4][4].y, '#847EBD')
    drawPixel(spaceShipGrid[4][5].x, spaceShipGrid[4][5].y, '#BFBCEE')
    drawPixel(spaceShipGrid[4][6].x, spaceShipGrid[4][6].y, '#A6A4D0')
    drawPixel(spaceShipGrid[4][7].x, spaceShipGrid[4][7].y, '#847EBD')
    drawPixel(spaceShipGrid[4][8].x, spaceShipGrid[4][8].y, '#BFBCEE')
    drawPixel(spaceShipGrid[4][9].x, spaceShipGrid[4][9].y, '#A6A4D0')
    drawPixel(spaceShipGrid[4][10].x, spaceShipGrid[4][10].y, '#A6A4D0')
    drawPixel(spaceShipGrid[4][11].x, spaceShipGrid[4][11].y, '#847EBD')

    drawPixel(spaceShipGrid[5][0].x, spaceShipGrid[5][0].y, '#A6A4D0')
    drawPixel(spaceShipGrid[5][1].x, spaceShipGrid[5][1].y, '#715CBC')
    drawPixel(spaceShipGrid[5][2].x, spaceShipGrid[5][2].y, '#715CBC')
    drawPixel(spaceShipGrid[5][3].x, spaceShipGrid[5][3].y, '#715CBC')
    drawPixel(spaceShipGrid[5][4].x, spaceShipGrid[5][4].y, '#5B4190')
    drawPixel(spaceShipGrid[5][5].x, spaceShipGrid[5][5].y, '#A6A4D0')
    drawPixel(spaceShipGrid[5][6].x, spaceShipGrid[5][6].y, '#A6A4D0')
    drawPixel(spaceShipGrid[5][7].x, spaceShipGrid[5][7].y, '#847EBD')
    drawPixel(spaceShipGrid[5][8].x, spaceShipGrid[5][8].y, '#715CBC')
    drawPixel(spaceShipGrid[5][9].x, spaceShipGrid[5][9].y, '#715CBC')
    drawPixel(spaceShipGrid[5][10].x, spaceShipGrid[5][10].y, '#715CBC')
    drawPixel(spaceShipGrid[5][11].x, spaceShipGrid[5][11].y, '#715CBC')
    drawPixel(spaceShipGrid[5][12].x, spaceShipGrid[5][12].y, '#715CBC')

    drawPixel(spaceShipGrid[6][3].x, spaceShipGrid[6][3].y, '#5B4190')
    drawPixel(spaceShipGrid[6][4].x, spaceShipGrid[6][4].y, '#5B4190')
    drawPixel(spaceShipGrid[6][5].x, spaceShipGrid[6][5].y, '#847EBD')
    drawPixel(spaceShipGrid[6][6].x, spaceShipGrid[6][6].y, '#847EBD')
    drawPixel(spaceShipGrid[6][7].x, spaceShipGrid[6][7].y, '#847EBD')
    drawPixel(spaceShipGrid[6][8].x, spaceShipGrid[6][8].y, '#5B4190')
    drawPixel(spaceShipGrid[6][9].x, spaceShipGrid[6][9].y, '#5B4190')
  }

  const drawFlames = () => {
    drawPixel(spaceShipGrid[7][3].x, spaceShipGrid[7][3].y, '#7E1B70')
    drawPixel(spaceShipGrid[7][4].x, spaceShipGrid[7][4].y, '#EE7A6A')
    drawPixel(spaceShipGrid[7][5].x, spaceShipGrid[7][5].y, '#F09E70')
    drawPixel(spaceShipGrid[7][6].x, spaceShipGrid[7][6].y, '#F09E70')
    drawPixel(spaceShipGrid[7][7].x, spaceShipGrid[7][7].y, '#F09E70')
    drawPixel(spaceShipGrid[7][8].x, spaceShipGrid[7][8].y, '#EE7A6A')
    drawPixel(spaceShipGrid[7][9].x, spaceShipGrid[7][9].y, '#7E1B70')

    drawPixel(spaceShipGrid[8][3].x, spaceShipGrid[8][3].y, '#340A5E')
    drawPixel(spaceShipGrid[8][4].x, spaceShipGrid[8][4].y, '#DE4B68')
    drawPixel(spaceShipGrid[8][5].x, spaceShipGrid[8][5].y, '#EE7A6A')
    drawPixel(spaceShipGrid[8][6].x, spaceShipGrid[8][6].y, '#F09E70')
    drawPixel(spaceShipGrid[8][7].x, spaceShipGrid[8][7].y, '#EE7A6A')
    drawPixel(spaceShipGrid[8][8].x, spaceShipGrid[8][8].y, '#DE4B68')
    drawPixel(spaceShipGrid[8][9].x, spaceShipGrid[8][9].y, '#340A5E')

    drawPixel(spaceShipGrid[9][4].x, spaceShipGrid[9][4].y, '#7E1B70')
    drawPixel(spaceShipGrid[9][5].x, spaceShipGrid[9][5].y, '#DE4B68')
    drawPixel(spaceShipGrid[9][6].x, spaceShipGrid[9][6].y, '#EE7A6A')
    drawPixel(spaceShipGrid[9][7].x, spaceShipGrid[9][7].y, '#DE4B68')
    drawPixel(spaceShipGrid[9][8].x, spaceShipGrid[9][8].y, '#7E1B70')

    drawPixel(spaceShipGrid[10][4].x, spaceShipGrid[10][4].y, '#340A5E')
    drawPixel(spaceShipGrid[10][5].x, spaceShipGrid[10][5].y, '#7E1B70')
    drawPixel(spaceShipGrid[10][6].x, spaceShipGrid[10][6].y, '#DE4B68')
    drawPixel(spaceShipGrid[10][7].x, spaceShipGrid[10][7].y, '#7E1B70')
    drawPixel(spaceShipGrid[10][8].x, spaceShipGrid[10][8].y, '#340A5E')

    drawPixel(spaceShipGrid[11][5].x, spaceShipGrid[11][5].y, '#340A5E')
    drawPixel(spaceShipGrid[11][6].x, spaceShipGrid[11][6].y, '#7E1B70')
    drawPixel(spaceShipGrid[11][7].x, spaceShipGrid[11][7].y, '#340A5E')

    drawPixel(spaceShipGrid[12][6].x, spaceShipGrid[12][6].y, '#340A5E')
  }

  const drawPixel = (x, y, color) => {
    canvas.drawRect(x, y, pixelSize, pixelSize, {
      fillStyle: color,
      strokeStyle: color,
    })
    canvas.context().stroke()
  }

  return {
    init,
    run,
  }
}
