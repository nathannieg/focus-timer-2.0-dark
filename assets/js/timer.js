export default function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut
  let minutes = minutesDisplay.textContent
  let seconds = secondsDisplay.textContent

  const buttonAdd5 = document.querySelector('.timer__controls__plus')
  const buttonSubtract5 = document.querySelector('.timer__controls__minus')

  function countdown() {
    // setTimeout stored inside a variable so we can get its id and pass it to clearTimeout when we need to stop the app
    timerTimeOut = setTimeout(() => {
      let countdownMinutes = Number(minutesDisplay.textContent)
      let countdownSeconds = Number(secondsDisplay.textContent)
      let isFinished = countdownMinutes <= 0 && countdownSeconds <= 0

      updateTimerDisplay(countdownMinutes, 0)

      // When minutes and seconds get to zero, we'll stop the app
      if (isFinished) {
        reset()
        return
      }

      // If seconds has reached zero, we subtract 1 from minutes
      if (countdownSeconds <= 0) {
        countdownSeconds = 10 //should be 60
        --countdownMinutes // same as countdownMinutes = countdownMinutes - 1
      }

      // Now that we've subtracted 1 from minutes, we'll update the display with the new minute and seconds - 1.
      updateTimerDisplay(countdownMinutes, String(countdownSeconds - 1))

      // Add 5 minutes do counter
      buttonAdd5.addEventListener('click', () => {
        countdownMinutes = countdownMinutes + 5
        updateTimerDisplay(countdownMinutes, String(countdownSeconds - 1))
      })

      // Subtracts 5 minutes from counter if minutes is more than 5. 
      // If minutes is exactly 5, makes minutes 0 and lets seconds run until end.
      // If minutes is less than 5, resets timer.
      buttonSubtract5.addEventListener('click', () => {

        let isLessThan5Minutes = countdownMinutes < 5
        let is5Minutes = countdownMinutes == 5

        if (is5Minutes) {
          updateTimerDisplay(0, String(countdownSeconds - 1))
        } else if (isLessThan5Minutes) {
          reset()
          return
        } else {
          countdownMinutes = countdownMinutes - 5
          updateTimerDisplay(countdownMinutes, String(countdownSeconds - 1))
        }
      })

      countdown()

    }, 1000)
  }

  function updateTimerDisplay(min, sec) {
    minutesDisplay.textContent = String(min).padStart(2, '0')
    secondsDisplay.textContent = String(sec).padStart(2, '0')
  }

  // Resets the app, stopping the setTimeOut and updating the display back to the initial value of 25 (html tag)
  function reset() {
    updateTimerDisplay(minutes, seconds)
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    updateTimerDisplay,
    reset
  }
}
