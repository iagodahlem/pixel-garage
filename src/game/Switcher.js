export const Switcher = ({ game }) => {
  const levels = [
    { name: 'spaceship', label: 'Spaceship', key: '1' },
    { name: 'car', label: 'Car', key: '2' },
  ]

  const buttons = {}

  const init = () => {
    render()
    syncButtons()

    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('popstate', handlePopstate)
  }

  const render = () => {
    const nav = document.createElement('nav')
    nav.className = 'switcher'

    levels.forEach(({ name, label }) => {
      const button = document.createElement('button')

      button.type = 'button'
      button.textContent = label
      button.setAttribute('aria-pressed', 'false')

      button.addEventListener('click', () => {
        switchTo(name)
        button.blur()
      })

      nav.appendChild(button)
      buttons[name] = button
    })

    document.body.appendChild(nav)
  }

  const handleKeydown = (event) => {
    const level = levels.find(({ key }) => key === event.key)

    if (level) switchTo(level.name)
  }

  const handlePopstate = () => {
    const query = new URLSearchParams(window.location.search)

    game.switchLevel(query.get('level'))
    syncButtons()
  }

  const switchTo = (name) => {
    game.switchLevel(name)
    syncButtons()

    const url = new URL(window.location)
    url.searchParams.set('level', game.currentLevel())
    window.history.replaceState({}, '', url)
  }

  const syncButtons = () => {
    const current = game.currentLevel()

    levels.forEach(({ name }) => {
      buttons[name].setAttribute('aria-pressed', String(name === current))
    })
  }

  return { init }
}
