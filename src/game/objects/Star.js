import { pixelSize } from '../../_shared/config'
import { Grid } from '../../_shared/Grid'

const purple = '#340E42'
const blue1 = '#2E2C5B'
const blue2 = '#4268B7'
const blue3 = '#51B2F9'
const blue4 = '#3A84D5'

export const Star = ({ canvas }) => {
  const position = {
    x: 0,
    y: 0,
  }

  let starGrid

  const init = () => {
    position.x = window.innerWidth / 2
    position.y = window.innerHeight / 2

    calculateGrid()
  }

  const run = () => {
    calculateGrid()

    draw()
  }

  const calculateGrid = () => {
    starGrid = Grid({ gridSize: 13, size: 3 }).matrix({
      x: position.x,
      y: position.y,
    })
  }

  const draw = () => {
    canvas.context().save()

    drawStar()

    canvas.context().restore()
  }

  const drawStar = () => {
    drawPixel(starGrid[0][6].x, starGrid[0][6].y, purple)

    drawPixel(starGrid[1][6].x, starGrid[1][6].y, blue1)

    drawPixel(starGrid[2][2].x, starGrid[2][2].y, blue1)
    drawPixel(starGrid[2][5].x, starGrid[2][5].y, purple)
    drawPixel(starGrid[2][6].x, starGrid[2][6].y, blue2)
    drawPixel(starGrid[2][7].x, starGrid[2][7].y, purple)
    drawPixel(starGrid[2][10].x, starGrid[2][10].y, blue1)

    drawPixel(starGrid[3][4].x, starGrid[3][4].y, purple)
    drawPixel(starGrid[3][5].x, starGrid[3][5].y, blue1)
    drawPixel(starGrid[3][6].x, starGrid[3][6].y, blue2)
    drawPixel(starGrid[3][7].x, starGrid[3][7].y, blue1)
    drawPixel(starGrid[3][8].x, starGrid[3][8].y, purple)

    drawPixel(starGrid[4][3].x, starGrid[4][3].y, purple)
    drawPixel(starGrid[4][4].x, starGrid[4][4].y, blue1)
    drawPixel(starGrid[4][5].x, starGrid[4][5].y, blue2)
    drawPixel(starGrid[4][6].x, starGrid[4][6].y, blue3)
    drawPixel(starGrid[4][7].x, starGrid[4][7].y, blue2)
    drawPixel(starGrid[4][8].x, starGrid[4][8].y, blue1)
    drawPixel(starGrid[4][9].x, starGrid[4][9].y, purple)

    drawPixel(starGrid[5][2].x, starGrid[5][2].y, purple)
    drawPixel(starGrid[5][3].x, starGrid[5][3].y, blue1)
    drawPixel(starGrid[5][4].x, starGrid[5][4].y, blue2)
    drawPixel(starGrid[5][5].x, starGrid[5][5].y, blue4)
    drawPixel(starGrid[5][6].x, starGrid[5][6].y, blue3)
    drawPixel(starGrid[5][7].x, starGrid[5][7].y, blue4)
    drawPixel(starGrid[5][8].x, starGrid[5][8].y, blue2)
    drawPixel(starGrid[5][9].x, starGrid[5][9].y, blue1)
    drawPixel(starGrid[5][10].x, starGrid[5][10].y, purple)

    drawPixel(starGrid[6][0].x, starGrid[6][0].y, purple)
    drawPixel(starGrid[6][1].x, starGrid[6][1].y, blue1)
    drawPixel(starGrid[6][2].x, starGrid[6][2].y, blue2)
    drawPixel(starGrid[6][3].x, starGrid[6][3].y, blue2)
    drawPixel(starGrid[6][4].x, starGrid[6][4].y, blue3)
    drawPixel(starGrid[6][5].x, starGrid[6][5].y, blue3)
    drawPixel(starGrid[6][6].x, starGrid[6][6].y, blue4)
    drawPixel(starGrid[6][7].x, starGrid[6][7].y, blue3)
    drawPixel(starGrid[6][8].x, starGrid[6][8].y, blue3)
    drawPixel(starGrid[6][9].x, starGrid[6][9].y, blue2)
    drawPixel(starGrid[6][10].x, starGrid[6][10].y, blue2)
    drawPixel(starGrid[6][11].x, starGrid[6][11].y, blue1)
    drawPixel(starGrid[6][12].x, starGrid[6][12].y, purple)

    drawPixel(starGrid[7][2].x, starGrid[7][2].y, purple)
    drawPixel(starGrid[7][3].x, starGrid[7][3].y, blue1)
    drawPixel(starGrid[7][4].x, starGrid[7][4].y, blue2)
    drawPixel(starGrid[7][5].x, starGrid[7][5].y, blue4)
    drawPixel(starGrid[7][6].x, starGrid[7][6].y, blue3)
    drawPixel(starGrid[7][7].x, starGrid[7][7].y, blue4)
    drawPixel(starGrid[7][8].x, starGrid[7][8].y, blue2)
    drawPixel(starGrid[7][9].x, starGrid[7][9].y, blue1)
    drawPixel(starGrid[7][10].x, starGrid[7][10].y, purple)

    drawPixel(starGrid[8][3].x, starGrid[8][3].y, purple)
    drawPixel(starGrid[8][4].x, starGrid[8][4].y, blue1)
    drawPixel(starGrid[8][5].x, starGrid[8][5].y, blue2)
    drawPixel(starGrid[8][6].x, starGrid[8][6].y, blue3)
    drawPixel(starGrid[8][7].x, starGrid[8][7].y, blue2)
    drawPixel(starGrid[8][8].x, starGrid[8][8].y, blue1)
    drawPixel(starGrid[8][9].x, starGrid[8][9].y, purple)

    drawPixel(starGrid[9][4].x, starGrid[9][4].y, purple)
    drawPixel(starGrid[9][5].x, starGrid[9][5].y, blue1)
    drawPixel(starGrid[9][6].x, starGrid[9][6].y, blue2)
    drawPixel(starGrid[9][7].x, starGrid[9][7].y, blue1)
    drawPixel(starGrid[9][8].x, starGrid[9][8].y, purple)

    drawPixel(starGrid[10][2].x, starGrid[10][2].y, blue1)
    drawPixel(starGrid[10][5].x, starGrid[10][5].y, purple)
    drawPixel(starGrid[10][6].x, starGrid[10][6].y, blue2)
    drawPixel(starGrid[10][7].x, starGrid[10][7].y, purple)
    drawPixel(starGrid[10][10].x, starGrid[10][10].y, blue1)

    drawPixel(starGrid[11][6].x, starGrid[11][6].y, blue1)

    drawPixel(starGrid[12][6].x, starGrid[12][6].y, purple)
  }

  const drawPixel = (x, y, color) => {
    canvas.drawRect(x, y, pixelSize, pixelSize, {
      fillStyle: color,
      strokeStyle: color,
      shadowBlur: 5,
      shadowColor: color,
    })
    canvas.context().stroke()
  }

  return {
    init,
    run,
  }
}
