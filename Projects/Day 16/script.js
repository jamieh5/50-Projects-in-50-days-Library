const glasses = document.querySelectorAll('.glass')
const remaining = document.querySelector('.remaining')

let text = 2000

glasses.forEach((element) => {
  element.addEventListener('click', function () {
    text -= 250

    remaining.innerHTML = `${text} ml`

    element.disabled = true
  })
})
