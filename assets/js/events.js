import {
  buttonToggleTheme,
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonPlusFive,
  buttonMinusFive,
  forestCardUnclicked,
  forestCardClicked,
  rainCardUnlicked,
  rainCardClicked,
  cafeCardUnclicked,
  cafeCardClicked,
  fireCardUnclicked,
  firepCardClicked
} from './elements.js'
import Sounds from './sounds.js'

const sound = Sounds()
// using: sound.ELEMENT.play()

export default function ({ timer }) {
  buttonPlay.addEventListener('click', () => {
    timer.countdown()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', () => {
    timer.reset()
    sound.pressButton()
  })

  forestCardUnclicked.addEventListener('click', () => {
    sound.playForestSound()
    forestCardUnclicked.classList.add('hide')
    forestCardClicked.classList.remove('hide')
  })

  forestCardClicked.addEventListener('click', () => {
    sound.stopForestSound()
    forestCardClicked.classList.add('hide')
    forestCardUnclicked.classList.remove('hide')
  })
}
