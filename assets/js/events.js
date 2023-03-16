import { buttonPlay, buttonStop } from './elements.js'

export default function ({ timer }) {
  buttonPlay.addEventListener('click', () => {
    timer.countdown()
  })

  buttonStop.addEventListener('click', () => {
    timer.reset()
  })
}
