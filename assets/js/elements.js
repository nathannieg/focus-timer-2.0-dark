// VARIABLES

const minutesDisplay = document.querySelector('#timer__display__minutes')

const secondsDisplay = document.querySelector('#timer__display__seconds')

const buttonPlay = document.querySelector('.timer__controls__play')
const buttonStop = document.querySelector('.timer__controls__stop')
const buttonPlusFive = document.querySelector('.timer__controls__plus')
const buttonMinusFive = document.querySelector('.timer__controls__minus')

const forestCardUnclicked = document.querySelector('.card__forest--unclicked')
const forestCardClicked = document.querySelector('.card__forest--clicked')
const rainCardUnclicked = document.querySelector('.card__rain--unclicked')
const rainCardClicked = document.querySelector('.card__rain--clicked')
const cafeCardUnclicked = document.querySelector('.card__cafe--unclicked')
const cafeCardClicked = document.querySelector('.card__cafe--clicked')
const fireCardUnclicked = document.querySelector('.card__fire--unclicked')
const fireCardClicked = document.querySelector('.card__fire--clicked')

export {
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
}

/*

EXPORT WITH OBJECT DESTRUCTURING 

 export const elements = {
  buttonToggleTheme,
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
} */
