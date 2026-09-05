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
  let starfield
  let resizeBound = false

  const init = () => {
    spaceship.init()

    buildStarfield()

    if (!resizeBound) {
      window.addEventListener('resize', buildStarfield)
      resizeBound = true
    }
  }

  const buildStarfield = () => {
    starfield = canvas.createLayer()

    starFractions.forEach(({ x, y }) => {
      const star = Star({ canvas: starfield })
      star.init({ x: x * canvas.width(), y: y * canvas.height() })
      star.run()
    })
  }

  const run = () => {
    canvas.erase({ fillStyle: 'black' })
    canvas.context().drawImage(starfield.element(), 0, 0)
    spaceship.run()
  }

  return {
    init,
    run,
  }
}
