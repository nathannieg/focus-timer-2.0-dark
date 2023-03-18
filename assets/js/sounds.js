export default function () {
  // creating variables to stores audios
  const forestSound = new Audio('./assets/audio/Floresta.wav')
  const rainSound = new Audio('./assets/audio/Chuva.wav')
  const cafeSound = new Audio('./assets/audio/Cafeteria.wav')
  const fireSound = new Audio('./assets/audio/Lareira.wav')

  forestSound.loop = true
  rainSound.loop = true
  cafeSound.loop = true
  fireSound.loop = true

  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  // Sound in loop
  // fireSound.loop = true

  // All functions that will play audio files go here
  function pressButton() {
    buttonPressAudio.play()
  }

  function playForestSound() {
    forestSound.play()
  }

  function stopForestSound() {
    forestSound.stop()
  }

  return {
    pressButton,
    playForestSound,
    stopForestSound
  }
}
