const container = document.querySelector('.container')

const createGrid = size => {
  grid.innerHTML = ''
  const squareSize = 500 / size

  for (let i = 0; i < size; i++) {
    const row = document.createElement('div')
    row.classList.add('row')
    grid.appendChild(row)

    for (let i = 0; i < size; i++) {
      const square = document.createElement('div')
      square.classList.add('square')
      square.style.width = `${squareSize}px`
      square.style.height = `${squareSize}px`
      row.appendChild(square)
    }
  }

  const squares = document.querySelectorAll('.square')
  squares.forEach(square => square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'darkslategray'
  }))
}

const createButton = () => {
  const button = document.createElement('button')
  button.textContent = 'New grid size'
  container.appendChild(button)
  button.addEventListener('click', () => {
    size = parseInt(prompt('Choose grid size:'))
    if (size > 100) {
      alert('Size cannot exceed 100')
    } else {
      createGrid(size)
    }
  })
}

createButton()
const grid = document.createElement('div')
grid.classList.add('grid')
container.appendChild(grid)
// default size
let size = 16
createGrid(size)


