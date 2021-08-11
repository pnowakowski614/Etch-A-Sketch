const container = document.getElementById("container");
const clear = document.getElementById("clear");
let divs = document.getElementsByClassName("grid-div");
const newGrid = document.getElementById("newgrid");
let currentGridSize = 16;
MakingGrids(currentGridSize);

function MakingGrids(currentGridSize) {
    container.style.gridTemplateColumns = `repeat(${currentGridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${currentGridSize}, 1fr)`;

    for (let i = 0; i < currentGridSize*currentGridSize; ++i) {
        let newDiv = document.createElement("div");
        newDiv.className = "grid-div"; 
        newDiv.style.border = "1px rgb(190, 190, 190) solid";
        container.appendChild(newDiv);  
    }
}

container.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = "black";
})

clear.addEventListener('click', function() {
    for (let i = 0; i < currentGridSize*currentGridSize; ++i) {
        divs[i].style.backgroundColor="white";
    }
})

newGrid.addEventListener('click', function() {
    currentGridSize = Number(prompt("Choose the grid size (smaller than 90!):"));
    let length = divs.length;

    while((typeof(currentGridSize) != "number") || (currentGridSize > 90) || (currentGridSize < 1)) {
        currentGridSize = Number(prompt("Incorrect value! Choose the grid size:"));
    }

    for (let k = length-1; k > -1; --k){
        divs[k].remove();
    }
    
    MakingGrids(currentGridSize);
    })


