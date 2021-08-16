const container = document.getElementById("container");
const clear = document.getElementById("clear");
const eraser = document.getElementById("eraser");
const black = document.getElementById("black");
const random = document.getElementById("random");
const gridlines = document.getElementById("gridlines");
const color = document.getElementById("color");
const input = document.createElement("input");
const newGrid = document.getElementById("newgrid");
let divs = document.getElementsByClassName("grid-div");
let currentGridSize = 16;
input.type = "color";
input.id = "input";
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

eraser.addEventListener('click', function () {
    container.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "white";
    })
})

black.addEventListener('click', function () {
    container.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "black";
    })
})

gridlines.addEventListener('click', function () {
    for (let i = 0; i < currentGridSize*currentGridSize; ++i) {
        if (divs[i].style.border === "0px none") {
            divs[i].style.border = "1px rgb(190, 190, 190) solid";
        }
        else {
            divs[i].style.border = "0px";
        }
    }
})

color.addEventListener('change', function () {
    container.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = color.value;
    })
});

random.addEventListener('click', function () {
    container.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    })
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


