const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breathTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

function breatheAnimation() {
  text.innerHTML = 'Breathe In!'
  container.className = 'container grow'
}
