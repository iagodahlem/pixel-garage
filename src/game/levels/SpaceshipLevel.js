import { Star } from '../objects/Star'

const starFractions = [
  { x: 0.08, y: 0.12 },
  { x: 0.25, y: 0.75 },
  { x: 0.5, y: 0.2 },
  { x: 0.7, y: 0.55 },
  { x: 0.85, y: 0.15 },
  { x: 0.92, y: 0.8 },
]

export const SpaceshipLevel = ({ canvas, spaceship }) => {
  let stars

  const init = () => {
    spaceship.init()

    stars = starFractions.map(({ x, y }) => {
      const star = Star({ canvas })
      star.init({ x: x * canvas.width(), y: y * canvas.height() })
      return star
    })
  }

  const run = () => {
    canvas.erase({ fillStyle: 'black' })
    stars.forEach((star) => star.run())
    spaceship.run()
  }

  return {
    init,
    run,
  }
}
