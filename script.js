const gridContainer = document.querySelector(".gridContainer");
//Setup Default Grid
window.addEventListener("load", function() {
    setGrid(4);
    makeGrid(4);
})

//Setting the grid columns and then filling it in
function setGrid(userInput) {
    gridContainer.style.cssText = `grid-template-columns: repeat(${userInput}, 1fr)`;
}

function makeGrid(userInput) {
    for (let i = 0; i < userInput * userInput; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("box");
        gridElement.style.css = "align-self: stretch;"
        gridElement.addEventListener("mouseover", function() {
            gridElement.style.cssText = "background-color: black; border-color: white";
        })
        gridContainer.appendChild(gridElement)
    }
}

//Empty the gridcontainer to resize properly
function remove() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

//Setting new grid size
const button = document.querySelector("#gridInput");
button.addEventListener("click", function() {
    userInput = Number(prompt("Enter Number"));
    remove();
    setGrid(userInput);
    makeGrid(userInput);
})

//resetting the color
function clearColor() {
    let count = gridContainer.children;
    for (let i = 0; i < count.length; i++) {
        count[i].style.cssText = "background-color: aqua;";
    }
} 

const button2 = document.querySelector("#clearGrid");
button2.addEventListener("click", clearColor);
