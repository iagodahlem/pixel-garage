import { createContainer, asFunction } from 'awilix'

import { Canvas } from './game/Canvas'
import { Controls } from './game/Controls'
import { Game } from './game/Game'
import { Pointer } from './game/Pointer'
import { Switcher } from './game/Switcher'
import { Spaceship } from './game/objects/Spaceship'
import { Car } from './game/objects/Car'
import { CarLevel } from './game/levels/CarLevel'
import { SpaceshipLevel } from './game/levels/SpaceshipLevel'

const container = createContainer()

container.register({
  canvas: asFunction(Canvas).singleton(),
  controls: asFunction(Controls).singleton(),
  pointer: asFunction(Pointer).singleton(),
  game: asFunction(Game).singleton(),
  switcher: asFunction(Switcher).singleton(),
  spaceship: asFunction(Spaceship).singleton(),
  car: asFunction(Car).singleton(),
  carLevel: asFunction(CarLevel),
  spaceshipLevel: asFunction(SpaceshipLevel),
})

export { container }
