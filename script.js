const container = document.querySelector('.container')
const grid = document.createElement('div')
grid.classList.add('grid')
container.appendChild(grid)
const size = 16

for (let i = 0; i < size; i++) {
  const row = document.createElement('div')
  row.classList.add('row')
  grid.appendChild(row)
  for (let i = 0; i < size; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    row.appendChild(square)
  }
}


