const prev = document.querySelector('.prev')
const main = document.querySelector('.main')
const next = document.querySelector('.next')

let count = 0

const picArr = [
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',

  'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',

  'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',

  'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',

  'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
]

main.style.backgroundImage = 'url(' + picArr[count] + ')'

prev.addEventListener('click', function () {
  if (count > 0) {
    count--
    main.style.backgroundImage = 'url(' + picArr[count] + ')'
  }
})

next.addEventListener('click', function () {
  if (count >= 0 && count < picArr.length - 1) {
    count++
    main.style.backgroundImage = 'url(' + picArr[count] + ')'
  }
})
