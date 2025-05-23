const navbar = document.querySelector('.navbar')
const iconBars = document.getElementById('icon-bars')

iconBars.addEventListener('click', function () {
  navbar.classList.toggle('active')
})
