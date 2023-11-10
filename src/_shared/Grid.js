import { pixelSize } from './config'

export const Grid = ({ gridSize }) => {
  const totalSize = gridSize * pixelSize

  const createMatrix = ({ x, y }) =>
    Array.from(Array(gridSize), () => Array(gridSize).fill(0)).map(
      (row, rowIndex) =>
        row.map((_, columnIndex) => ({
          x: columnIndex * pixelSize + (x - totalSize / 2),
          y: rowIndex * pixelSize + (y - totalSize / 2),
        }))
    )

  return {
    matrix: createMatrix,
    totalSize: () => totalSize,
  }
}
