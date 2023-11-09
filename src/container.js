import { createContainer, asFunction } from 'awilix'

import { Canvas } from './game/Canvas'
import { Controls } from './game/Controls'
import { Game } from './game/Game'
import { Level } from './game/Level'
import { Pointer } from './game/Pointer'
import { Menu } from './game/levels/Menu'

const container = createContainer()

container.register({
  canvas: asFunction(Canvas).singleton(),
  controls: asFunction(Controls).singleton(),
  game: asFunction(Game),
  level: asFunction(Level),
  pointer: asFunction(Pointer).singleton(),
  menu: asFunction(Menu),
})

export { container }
