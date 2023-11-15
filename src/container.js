import { createContainer, asFunction } from 'awilix'

import { Canvas } from './game/Canvas'
import { Controls } from './game/Controls'
import { Game } from './game/Game'
import { Level } from './game/Level'
import { Pointer } from './game/Pointer'
import { Menu } from './game/levels/Menu'
import { Star } from './game/objects/Star'
import { Spaceship } from './game/objects/Spaceship'
import { Car } from './game/objects/Car'

const container = createContainer()

container.register({
  canvas: asFunction(Canvas).singleton(),
  controls: asFunction(Controls).singleton(),
  game: asFunction(Game),
  level: asFunction(Level),
  pointer: asFunction(Pointer).singleton(),
  menu: asFunction(Menu),
  star: asFunction(Star).singleton(),
  spaceship: asFunction(Spaceship).singleton(),
  car: asFunction(Car).singleton(),
})

export { container }
