function createGrid(gridSpaces) {
  let divElement = document.querySelector(".square-div-grid");
  for (let i = 0; i < gridSpaces * gridSpaces; i++) {
    const div = document.createElement("div");
    divElement.appendChild(div);
    addBackgroundColor(div);
  }
}

function addBackgroundColor(element) {
  element.addEventListener("mouseover", event => {
    element.style.backgroundColor = "black";
  });
}

let button = document.querySelector(".prompt-btn");
button.addEventListener("click", event => {
  let gridContainer = document.querySelector(".square-div-grid");
  let divElement = document.querySelector(".square-div-grid");
  while (divElement.firstChild) {
    divElement.removeChild(divElement.firstChild);
  }
  let gridSpaces = prompt("Please input a number for how much spaces you want (You can choose 8, 16-default, 32 or 64)", 16);
  if (gridSpaces === "8") {
    gridContainer.style.width = "50px";
  } else if (gridSpaces === "16") {
    gridContainer.style.width = "98px";
  } else if (gridSpaces === "32") {
    gridContainer.style.width = "194px";
  } else if (gridSpaces === "64") {
    gridContainer.style.width = "386px";
  }
  if (gridSpaces === "8" || gridSpaces === "16" || gridSpaces === "32" || gridSpaces === "64") {
    createGrid(gridSpaces);
  } else {
    alert("You have chosen an invalid number!");
  }
});

createGrid(16);
