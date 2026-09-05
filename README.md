# Pixel Garage

This is a small canvas playground I built in 2023, with two pixel-art vehicles, a spaceship and a car, drawn pixel by pixel on a grid.

Live at [pixel-garage.iagodahlem.com](https://pixel-garage.iagodahlem.com).

## Controls

Arrows or WASD move the current vehicle. Up thrusts the ship or throttles the car. Down brakes and then reverses the car. Left and right rotate the ship or steer the car. 1 and 2 switch vehicles, and so do the buttons in the corner of the screen. You can also load a vehicle directly with `?level=car` or `?level=spaceship` in the URL.

## Run

```sh
pnpm install
pnpm dev
pnpm build
```

Needs Node 22 or newer.

## Deploy

Deployed on Netlify from `main` to [pixel-garage.iagodahlem.com](https://pixel-garage.iagodahlem.com).

## License

[MIT License](http://iagodahlem.mit-license.org/) © Iago Dahlem
