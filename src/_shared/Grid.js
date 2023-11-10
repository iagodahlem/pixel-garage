import { pixelSize } from './config'

export const Grid = ({ gridSize, size = pixelSize }) => {
  const totalSize = size * gridSize

  const createMatrix = ({ x, y }) =>
    Array.from(Array(gridSize), () => Array(gridSize).fill(0)).map(
      (row, rowIndex) =>
        row.map((_, columnIndex) => ({
          x: columnIndex * size + (x - totalSize / 2),
          y: rowIndex * size + (y - totalSize / 2),
        }))
    )

  return {
    matrix: createMatrix,
    totalSize: () => totalSize,
  }
}
