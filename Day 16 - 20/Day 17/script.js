const target = document.querySelector('.target')
const chaser = document.querySelector('.chaser')
const body = document.querySelector('body')

// Getting a random Startposition for both the target and chaser
targetX = Math.floor(Math.random() * 1200)
targetY = Math.floor(Math.random() * 800)

chaserX = Math.floor(Math.random() * 1200)
chaserY = Math.floor(Math.random() * 800)

// Setting the Position of the target and the chaser
target.style.left = `${targetX}px`
target.style.top = `${targetY}px`

chaser.style.left = `${chaserX}px`
chaser.style.top = `${chaserY}px`

chaserSpeed = 8

// Adding eventlistener to the Arrow keys
body.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowDown':
      chaserY += chaserSpeed
      chaser.style.top = `${chaserY}px`
      break
    case 'ArrowUp':
      chaserY -= chaserSpeed
      chaser.style.top = `${chaserY}px`
      break
    case 'ArrowLeft':
      chaserX -= chaserSpeed
      chaser.style.left = `${chaserX}px`
      break
    case 'ArrowRight':
      chaserX += chaserSpeed
      chaser.style.left = `${chaserX}px`
      break
  }
})
