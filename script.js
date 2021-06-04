const gridContainer = document.querySelector(".gridContainer");
console.log(gridContainer);
window.addEventListener("load", function() {
    setGrid(4);
    makeGrid(4);
})

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

function remove() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

const button = document.querySelector("#gridInput");
button.addEventListener("click", function() {
    userInput = Number(prompt("Enter Number"));
    remove();
    setGrid(userInput);
    makeGrid(userInput);
})

