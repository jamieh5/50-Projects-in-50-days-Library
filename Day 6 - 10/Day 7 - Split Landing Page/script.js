const leftSide = document.querySelector('.left')
const rightSide = document.querySelector('.right')
const container = document.querySelector('.container')

leftSide.addEventListener('mouseenter', function () {
  container.classList.add('hover-left')
})
leftSide.addEventListener('mouseleave', function () {
  container.classList.remove('hover-left')
})

rightSide.addEventListener('mouseenter', function () {
  container.classList.add('hover-right')
})
rightSide.addEventListener('mouseleave', function () {
  container.classList.remove('hover-right')
})
