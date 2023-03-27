export default function () {
  // creating variables to stores audios
  const forestSound = new Audio('./assets/audio/Floresta.wav')
  const rainSound = new Audio('./assets/audio/Chuva.wav')
  const cafeSound = new Audio('./assets/audio/Cafeteria.wav')
  const fireSound = new Audio('./assets/audio/Lareira.wav')

  // Sound in loop
  forestSound.loop = true
  rainSound.loop = true
  cafeSound.loop = true
  fireSound.loop = true

  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  // All functions that will play audio files go here
  function pressButton() {
    buttonPressAudio.play()
  }

  function stopForestSound() {
    forestSound.pause()
  }

  return {
    pressButton,
    forestSound,
    rainSound,
    cafeSound,
    fireSound,
    stopForestSound
  }
}
