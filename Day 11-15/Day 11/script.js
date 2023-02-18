const key = document.querySelector('.event-key')
const keyCode = document.querySelector('.keyCode')
const code = document.querySelector('.code')

window.addEventListener('keydown', function (event) {
  console.log(event)
  key.innerHTML = event.key
  keyCode.innerHTML = event.code
  code.innerHTML = event.keyCode
})
