import { createContainer, asFunction } from 'awilix'

import { Canvas } from './game/Canvas'
import { Game } from './game/Game'
import { Level } from './game/Level'
import { Pointer } from './game/Pointer'

const container = createContainer()

container.register({
  canvas: asFunction(Canvas).singleton(),
  game: asFunction(Game),
  level: asFunction(Level),
  pointer: asFunction(Pointer).singleton(),
})

export { container }
