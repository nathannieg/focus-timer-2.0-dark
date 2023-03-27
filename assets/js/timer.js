export default function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut
  let minutes = minutesDisplay.textContent
  let seconds = secondsDisplay.textContent

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
        countdownSeconds = 3 //should be 60
        --countdownMinutes // same as countdownMinutes = countdownMinutes - 1
      }

      // Now that we've subtracted 1 from minutes, we'll update the display with the new minute and seconds - 1.
      updateTimerDisplay(countdownMinutes, String(countdownSeconds - 1))

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
