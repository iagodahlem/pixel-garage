import { pixelSize } from '../../_shared/config'
import { Grid } from '../../_shared/Grid'

export const Car = ({ canvas, controls }) => {
  const acceleration = 0.2
  const deceleration = 0.075
  const rotationSpeed = 2
  const maxSpeed = 5
  const steeringAcceleration = 0.03
  const steeringMaxAngle = 0.3

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
    steeringAngle: 0,
  }

  let isAccelerating = false
  let isBreaking = false
  let isSteering = false
  let isSteeringLeft = false
  let isSteeringRight = false

  let carGrid

  const init = () => {
    position.x = window.innerWidth / 2
    position.y = window.innerHeight / 2

    calculateGrid()
  }

  const run = () => {
    const { up, right, down, left } = controls

    isAccelerating = up()
    isBreaking = down()
    isSteeringLeft = left()
    isSteeringRight = right()
    isSteering = isSteeringLeft || isSteeringRight

    calculateSpeed()
    calculateRotation()
    calculateMovement()
    calculatePosition()
    calculateGrid()

    draw()
  }

  const calculateGrid = () => {
    carGrid = Grid({ xSize: 9, ySize: 15 }).matrix({
      x: position.x,
      y: position.y,
    })
  }

  const calculateRotation = () => {
    const { right, left } = controls

    if ((isSteering && position.speed >= 0.75) || position.speed <= -0.75) {
      switch (true) {
        case right():
          position.rotation =
            position.speed < 0
              ? position.rotation - rotationSpeed
              : position.rotation + rotationSpeed
          break
        case left():
          position.rotation =
            position.speed < 0
              ? position.rotation + rotationSpeed
              : position.rotation - rotationSpeed
          break
        default:
          break
      }

      position.angle = position.rotation * (Math.PI / 180)
    }

    if (isSteeringLeft) {
      if (position.steeringAngle > -steeringMaxAngle) {
        position.steeringAngle -= steeringAcceleration
      }
    } else if (isSteeringRight) {
      if (position.steeringAngle < steeringMaxAngle) {
        position.steeringAngle += steeringAcceleration
      }
    } else {
      if (position.steeringAngle > 0) {
        position.steeringAngle -= steeringAcceleration
      }

      if (position.steeringAngle < 0) {
        position.steeringAngle += steeringAcceleration
      }

      position.steeringAngle = 0
    }
  }

  const calculateSpeed = () => {
    // throttle
    if (isAccelerating) {
      position.speed += acceleration

      if (position.speed > maxSpeed) {
        position.speed = maxSpeed
      }

      // reverse
    } else if (isBreaking && position.speed <= 0) {
      position.speed -= acceleration

      if (position.speed < -(maxSpeed / 2)) {
        position.speed = -(maxSpeed / 2)
      }
    } else {
      // breaking
      if (isBreaking && position.speed > 0) {
        position.speed -= deceleration + 0.25

        if (position.speed < 0) {
          position.speed = 0
        }

        // deceleration
      } else {
        if (position.speed > 0) {
          position.speed -= deceleration

          if (position.speed < 0) {
            position.speed = 0
          }
        } else if (position.speed < 0) {
          position.speed += deceleration

          if (position.speed > 0) {
            position.speed = 0
          }
        }
      }
    }
  }

  const calculateMovement = () => {
    position.facingX = Math.round(Math.sin(position.angle) * 1000) / 1000
    position.facingY = Math.round(Math.cos(position.angle) * 1000) / 1000

    const positionX = position.speed * position.facingX
    const positionY = position.speed * -position.facingY

    position.movingX = positionX
    position.movingY = positionY

    // if (position.speed <= 3) {
    //   position.movingX = positionX
    //   position.movingY = positionY
    // } else if (position.speed > 4 && position.speed <= maxSpeed) {
    //   position.movingX += positionX
    //   position.movingY += positionY
    // } else {
    //   position.movingX = position.movingX
    //   position.movingY = position.movingY
    // }

    console.log({
      speed: position.speed,
      movingX: position.movingX,
    })
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
    rotateLeftWheel()
    drawLeftWheel()
    canvas.context().restore()

    canvas.context().save()
    rotateRightWheel()
    drawRightWheel()
    canvas.context().restore()

    canvas.context().save()
    rotateCar()
    drawCar()
    canvas.context().restore()
  }

  const red1 = '#B83C3B'
  const red2 = '#DE4A48'
  const yellow1 = '#F6E056'
  const black1 = '#201E1F'
  const black2 = '#323031'

  const rotateCar = () => {
    canvas.context().translate(carGrid[7][4].x, carGrid[7][4].y)
    canvas.context().rotate(position.angle)
    canvas.context().translate(-carGrid[7][4].x, -carGrid[7][4].y)
  }

  const rotateLeftWheel = () => {
    rotateCar()

    canvas.context().translate(carGrid[3][0].x, carGrid[3][0].y)
    canvas.context().rotate(position.steeringAngle)
    canvas.context().translate(-carGrid[3][0].x, -carGrid[3][0].y)
  }

  const rotateRightWheel = () => {
    rotateCar()

    canvas.context().translate(carGrid[3][8].x, carGrid[3][8].y)
    canvas.context().rotate(position.steeringAngle)
    canvas.context().translate(-carGrid[3][8].x, -carGrid[3][8].y)
  }

  const drawLeftWheel = () => {
    drawPixel(carGrid[2][0], black1)
    drawPixel(carGrid[3][0], black1)
    drawPixel(carGrid[4][0], black1)
  }

  const drawRightWheel = () => {
    drawPixel(carGrid[2][8], black1)
    drawPixel(carGrid[3][8], black1)
    drawPixel(carGrid[4][8], black1)
  }

  const drawCar = () => {
    drawPixel(carGrid[0][2], red1)
    drawPixel(carGrid[0][3], red1)
    drawPixel(carGrid[0][4], red1)
    drawPixel(carGrid[0][5], red1)
    drawPixel(carGrid[0][6], red1)

    drawPixel(carGrid[1][1], yellow1)
    drawPixel(carGrid[1][2], yellow1)
    drawPixel(carGrid[1][3], 'white')
    drawPixel(carGrid[1][4], 'white')
    drawPixel(carGrid[1][5], 'white')
    drawPixel(carGrid[1][6], yellow1)
    drawPixel(carGrid[1][7], yellow1)

    drawPixel(carGrid[2][1], red1)
    drawPixel(carGrid[2][2], red2)
    drawPixel(carGrid[2][3], 'white')
    drawPixel(carGrid[2][4], 'white')
    drawPixel(carGrid[2][5], 'white')
    drawPixel(carGrid[2][6], red2)
    drawPixel(carGrid[2][7], red1)

    drawPixel(carGrid[3][1], red2)
    drawPixel(carGrid[3][2], red1)
    drawPixel(carGrid[3][3], 'white')
    drawPixel(carGrid[3][4], 'white')
    drawPixel(carGrid[3][5], 'white')
    drawPixel(carGrid[3][6], red1)
    drawPixel(carGrid[3][7], red2)

    drawPixel(carGrid[4][1], red2)
    drawPixel(carGrid[4][2], black1)
    drawPixel(carGrid[4][3], black1)
    drawPixel(carGrid[4][4], black2)
    drawPixel(carGrid[4][5], black1)
    drawPixel(carGrid[4][6], black1)
    drawPixel(carGrid[4][7], red2)

    drawPixel(carGrid[5][1], black1)
    drawPixel(carGrid[5][2], black1)
    drawPixel(carGrid[5][3], black2)
    drawPixel(carGrid[5][4], black1)
    drawPixel(carGrid[5][5], black1)
    drawPixel(carGrid[5][6], black2)
    drawPixel(carGrid[5][7], black1)

    drawPixel(carGrid[6][1], black1)
    drawPixel(carGrid[6][2], black2)
    drawPixel(carGrid[6][3], black1)
    drawPixel(carGrid[6][4], black1)
    drawPixel(carGrid[6][5], black2)
    drawPixel(carGrid[6][6], black1)
    drawPixel(carGrid[6][7], black1)

    drawPixel(carGrid[7][1], red1)
    drawPixel(carGrid[7][2], red2)
    drawPixel(carGrid[7][3], 'white')
    drawPixel(carGrid[7][4], 'white')
    drawPixel(carGrid[7][5], 'white')
    drawPixel(carGrid[7][6], red2)
    drawPixel(carGrid[7][7], red1)

    drawPixel(carGrid[8][1], black1)
    drawPixel(carGrid[8][2], red2)
    drawPixel(carGrid[8][3], black1)
    drawPixel(carGrid[8][4], black1)
    drawPixel(carGrid[8][5], black1)
    drawPixel(carGrid[8][6], red2)
    drawPixel(carGrid[8][7], black1)

    drawPixel(carGrid[9][1], black1)
    drawPixel(carGrid[9][2], red2)
    drawPixel(carGrid[9][3], black1)
    drawPixel(carGrid[9][4], black1)
    drawPixel(carGrid[9][5], black1)
    drawPixel(carGrid[9][6], red2)
    drawPixel(carGrid[9][7], black1)

    drawPixel(carGrid[10][0], black1)
    drawPixel(carGrid[10][1], red1)
    drawPixel(carGrid[10][2], red2)
    drawPixel(carGrid[10][3], 'white')
    drawPixel(carGrid[10][4], 'white')
    drawPixel(carGrid[10][5], 'white')
    drawPixel(carGrid[10][6], red2)
    drawPixel(carGrid[10][7], red1)
    drawPixel(carGrid[10][8], black1)

    drawPixel(carGrid[11][0], black1)
    drawPixel(carGrid[11][1], red2)
    drawPixel(carGrid[11][2], black1)
    drawPixel(carGrid[11][3], 'white')
    drawPixel(carGrid[11][4], 'white')
    drawPixel(carGrid[11][5], 'white')
    drawPixel(carGrid[11][6], black1)
    drawPixel(carGrid[11][7], red2)
    drawPixel(carGrid[11][8], black1)

    drawPixel(carGrid[12][0], black1)
    drawPixel(carGrid[12][1], red2)
    drawPixel(carGrid[12][2], black1)
    drawPixel(carGrid[12][3], black1)
    drawPixel(carGrid[12][4], black1)
    drawPixel(carGrid[12][5], black1)
    drawPixel(carGrid[12][6], black1)
    drawPixel(carGrid[12][7], red2)
    drawPixel(carGrid[12][8], black1)

    drawPixel(carGrid[13][1], red1)
    drawPixel(carGrid[13][2], red1)
    drawPixel(carGrid[13][3], 'white')
    drawPixel(carGrid[13][4], 'white')
    drawPixel(carGrid[13][5], 'white')
    drawPixel(carGrid[13][6], red1)
    drawPixel(carGrid[13][7], red1)
  }

  const drawPixel = (coordinates, color) => {
    canvas.drawRect(coordinates.x, coordinates.y, pixelSize, pixelSize, {
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
