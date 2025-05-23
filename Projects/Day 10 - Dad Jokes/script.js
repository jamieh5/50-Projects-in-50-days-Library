async function fetchJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
  // console.log(response)
  const data = await response.json()
  // console.log(data)
  return data
}

async function changeJoke() {
  const { joke } = await fetchJoke()
  console.log(joke)
  document.querySelector('.joke').innerHTML = joke
}

changeJoke()

document.querySelector('.btn').addEventListener('click', changeJoke)
