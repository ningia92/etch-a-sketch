# Etch-a-Sketch

A browser-based Etch-a-Sketch toy developed in JavaScript and CSS as part of [The Odin Project Foundations Course](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

## Skills Acquired

- **DOM Manipulation & JavaScript**
  - Dynamically created a grid of square `<div>` elements using JS loops and `document.createElement()`.
  - Managed event listeners (`mouseover`) to change square colors on hover.
  - Used `prompt()` to capture user input for grid size and validated it.
- **CSS Layout & Flexbox**
  - Styled a fixed-size sketch area.
  - Leveraged Flexbox to wrap squares into rows and maintain a responsive grid.
  - Handled box-sizing to account for borders/margins and ensure uniform square dimensions.
- **Problem Solving Workflow**
  - Planned each feature in pseudocode, implemented step-by-step, tested with `console.log()`, and debugged continuously.

## Features

- **Dynamic Grid Creation**\
  Generates a default 16×16 grid on page load.

- **Hover Drawing**\
  Moves the mouse over squares to "draw" by changing their background color, simulating an Etch-A-Sketch trail.

- **Customizable Grid**\
  A "New Grid" button prompts for a number of squares per side (max 100), clears the existing grid, and renders a new one of the same overall size.
  

## Demo

Live on GitHub Pages: https://ningia92.github.io/etch-a-sketch/