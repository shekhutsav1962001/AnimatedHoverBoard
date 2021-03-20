const container = document.getElementById('container')
const colors = ['#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058','#28a745','#22863a','#176f2c','#165c26','#144620']
const SQUARES = 2000

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #1d1d1d'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}