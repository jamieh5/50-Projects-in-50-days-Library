const textArea = document.querySelector('.input-field')
const btn = document.querySelector('button')

let words = []

btn.addEventListener('click', function () {
  const str = textArea.value
  words = str.split(',')
  createSpan()
})

function createSpan() {
  words.forEach(function (e) {
    const element = document.createElement('span')
    element.innerHTML = e
    document.body.appendChild(element)
  })
}
