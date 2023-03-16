// IMPORTS
import Timer from './timer.js'

// VARIABLES
const buttonToggleTheme = document.querySelector('#toggle__theme')

const minutesDisplay = document.querySelector('#timer__display__minutes')

const secondsDisplay = document.querySelector('#timer__display__seconds')

const buttonPlay = document.querySelector('#timer__controls__play')
const buttonStop = document.querySelector('#timer__controls__stop')
const buttonPlusFive = document.querySelector('#timer__controls__plus')
const buttonMinusFive = document.querySelector('#timer__controls__minus')

const forestCardUnclicked = document.querySelector('.card__forest--unclicked')
const forestCardClicked = document.querySelector('.card__forest--clicked')
const rainCardUnlicked = document.querySelector('.card__rain--unclicked')
const rainCardClicked = document.querySelector('.card__rain--clicked')
const cafeCardUnclicked = document.querySelector('.card__cafe--unclicked')
const cafeCardClicked = document.querySelector('.card__cafe--clicked')
const fireCardUnclicked = document.querySelector('.card__fire--unclicked')
const firepCardClicked = document.querySelector('.card__fire--clicked')

// let timerTimeOut

// let minutes = minutesDisplay.textContent
// let seconds = secondsDisplay.textContent

// FACTORIES IMPORT
const timer = Timer({ minutesDisplay, secondsDisplay })

buttonPlay.addEventListener('click', () => {
  timer.countdown()
})

buttonStop.addEventListener('click', () => {
  timer.reset()
})
