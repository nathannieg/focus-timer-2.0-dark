// VARIABLES

const minutesDisplay = document.querySelector('#timer__display__minutes')

const secondsDisplay = document.querySelector('#timer__display__seconds')

const buttonPlay = document.querySelector('.timer__controls__play')
const buttonStop = document.querySelector('.timer__controls__stop')
const buttonPlusFive = document.querySelector('.timer__controls__plus')
const buttonMinusFive = document.querySelector('.timer__controls__minus')

const rainCardUnclicked = document.querySelector('.card__rain--unclicked')
const rainCardClicked = document.querySelector('.card__rain--clicked')
const cafeCardUnclicked = document.querySelector('.card__cafe--unclicked')
const cafeCardClicked = document.querySelector('.card__cafe--clicked')
const fireCardUnclicked = document.querySelector('.card__fire--unclicked')
const fireCardClicked = document.querySelector('.card__fire--clicked')

const forestCardContainerUnclicked = document.querySelector(
  '.card__container__forest--unclicked'
)
const forestCardContainerClicked = document.querySelector(
  '.card__container__forest--clicked'
)

export {
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
}
