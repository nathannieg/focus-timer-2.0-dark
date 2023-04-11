import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonPlusFive,
  buttonMinusFive,
  rainCardUnclicked,
  rainCardClicked,
  cafeCardUnclicked,
  cafeCardClicked,
  fireCardUnclicked,
  fireCardClicked,
  forestCardContainerUnclicked,
  forestCardContainerClicked
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

  // FOREST CARD
  forestCardContainerUnclicked.addEventListener('click', () => {
    sound.forestSound.play()
    forestCardContainerUnclicked.classList.add('hide')
    forestCardContainerClicked.classList.remove('hide')
  })

  forestCardContainerClicked.addEventListener('click', () => {
    sound.forestSound.pause()
    forestCardContainerClicked.classList.add('hide')
    forestCardContainerUnclicked.classList.remove('hide')
  })

  // RAIN CARD
  rainCardUnclicked.addEventListener('click', () => {
    sound.rainSound.play()
    rainCardUnclicked.classList.add('hide')
    rainCardClicked.classList.remove('hide')
  })

  rainCardClicked.addEventListener('click', () => {
    sound.rainSound.pause()
    rainCardClicked.classList.add('hide')
    rainCardUnclicked.classList.remove('hide')
  })

  // CAFE CARD
  cafeCardUnclicked.addEventListener('click', () => {
    sound.cafeSound.play()
    cafeCardUnclicked.classList.add('hide')
    cafeCardClicked.classList.remove('hide')
  })

  cafeCardClicked.addEventListener('click', () => {
    sound.cafeSound.pause()
    cafeCardClicked.classList.add('hide')
    cafeCardUnclicked.classList.remove('hide')
  })

  // FIRE CARD
  fireCardUnclicked.addEventListener('click', () => {
    sound.fireSound.play()
    fireCardUnclicked.classList.add('hide')
    fireCardClicked.classList.remove('hide')
  })

  fireCardClicked.addEventListener('click', () => {
    sound.fireSound.pause()
    fireCardClicked.classList.add('hide')
    fireCardUnclicked.classList.remove('hide')
  })
}
