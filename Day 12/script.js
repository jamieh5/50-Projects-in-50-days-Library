const btns = document.querySelectorAll('button')
const questions = document.querySelectorAll('.question')
const p = document.querySelectorAll('p')
/*

for (let i = 0; i < questions.length; i++) {
  icons[i].addEventListener('click', function () {
    questions[i].style.height = '150px'
    icons[i].style.lineHeight = '150px'
    p[i].style.opacity = '1'
  })
}

*/
for (let i = 0; i < questions.length; i++) {
  btns[i].addEventListener('click', function () {
    questions[i].classList.toggle('active')
  })
}
