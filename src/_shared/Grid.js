import { pixelSize } from './config'

export const Grid = ({ size = pixelSize, ...options }) => {
  const xSize = options.xSize || options.gridSize
  const ySize = options.ySize || options.gridSize

  const totalXSize = size * xSize
  const totalYSize = size * ySize

  const createMatrix = ({ x, y }) =>
    Array.from(Array(ySize), () => Array(xSize).fill(0)).map((row, rowIndex) =>
      row.map((_, columnIndex) => ({
        x: columnIndex * size + (x - totalXSize / 2),
        y: rowIndex * size + (y - totalYSize / 2),
      }))
    )

  return {
    matrix: createMatrix,
    totalSize: () => totalSize,
  }
}
