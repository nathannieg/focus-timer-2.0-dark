export default function () {
  // creating variables to stores audios
  const forestSound = new Audio(
    'https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view'
  )
  const rainSound = new Audio(
    'https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view'
  )
  const cafeSound = new Audio(
    'https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view'
  )
  const fireSound = new Audio(
    'https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view'
  )

  // Sound in loop
  // fireSound.loop = true

  function clickOnCard(card) {
    const newCard = card
    newCard.play()
  }

  return {
    clickOnCard
  }
}
