const applause = document.querySelector('.applause')
const boo = document.querySelector('.boo')
const gasp = document.querySelector('.gasp')
const tada = document.querySelector('.tada')
const victory = document.querySelector('.victory')
const wrong = document.querySelector('.wrong')

applause.addEventListener('click', function () {
  document.getElementById('applause').play()
})

boo.addEventListener('click', function () {
  document.getElementById('boo').play()
})

gasp.addEventListener('click', function () {
  document.getElementById('gasp').play()
})

tada.addEventListener('click', function () {
  document.getElementById('tada').play()
})

victory.addEventListener('click', function () {
  document.getElementById('victory').play()
})

wrong.addEventListener('click', function () {
  document.getElementById('wrong').play()
})
