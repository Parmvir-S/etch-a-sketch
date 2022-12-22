# Etch-A-Sketch
![easgif](https://user-images.githubusercontent.com/70659748/209034474-cf956b89-8369-4ab8-8df1-99c5be5771af.gif)

## Purpose
- This etch-a-sketch web application allows users to create simple drawings by hovering over a dynamically generated grid using their mouse. The main purpose of this project was to understand the document object model (DOM) and learn how to manipulate it using JavaScript.

## Tech Stack
- HTML, CSS and Vanilla JavaScript

## Challenges
- The most difficult part of making this application was to dynamically generate the divs and place them exactly the way I wanted to in a grid format. It would have been easy to just manually create the grid of square divs using HTML/CSS but having the grid be dynamic was quite challenging. This is because the user is able to pick what size grid they want: 1x1, 3x3, 16x16, 50x50, etc. 

## Accomplishments
- I was able to create the divs and make them appear as a grid using CSS grid and JavaScript. 
- I learned about the DOM and was able to manipulate it to build a simple application.
- I was able to setup a hover effect such that the grids divs change colour when the mouse passes over them, leaving a pixelated trail through the grid like a pen would. 
- I made the grid resizable through user input.
- I was created a clear drawing button that wipes the grid clean for a new drawing.

## Future Improvements
- I could allow users to choose the colour they would like to "draw" with.
- I could set a limit on the size of the grid that can be generated. Currently, if the user enters a very large number like 500 the entire browser just slows down and takes a very long time to render the grid.
- I could setup a save or print functionality for users drawings.
