// IMPORTS
import Timer from './timer.js'
import Events from './events.js'
import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonPlusFive,
  buttonMinusFive,
  forestCardUnclicked,
  forestCardClicked,
  rainCardUnclicked,
  rainCardClicked,
  cafeCardUnclicked,
  cafeCardClicked,
  fireCardUnclicked,
  fireCardClicked
} from './elements.js'

// IMPORTING VARIABLES WITH OBJECT DESTRUCTURING
// import { elements } from './elements.js'
/* const {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonPlusFive,
  buttonMinusFive,
  forestCardUnclicked,
  forestCardClicked,
  rainCardUnclicked,
  rainCardClicked,
  cafeCardUnclicked,
  cafeCardClicked,
  fireCardUnclicked,
  fireCardClicked
} = elements */

// CHANGING THEME

const container = document.querySelector('.container')

const toggleButton = document.querySelector('.toggle')

toggleButton.addEventListener('click', () => {
  container.classList.toggle('dark')
    ? (toggleButton.innerHTML = `<img src="./assets/img/moon.svg"/>`)
    : (toggleButton.innerHTML = `<img src="./assets/img/sun.svg"/>`)
})

// FACTORIES IMPORT
const timer = Timer({ minutesDisplay, secondsDisplay })

// Executing Events so they will happen when clicks happens
Events({ timer })
