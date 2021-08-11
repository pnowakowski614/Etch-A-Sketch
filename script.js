const container = document.getElementById("container");
const clear = document.getElementById("clear");
const divs = document.getElementsByClassName("grid-div");

for (let i = 1; i < 16*16+1; ++i) {
    let newDiv = document.createElement("div");
    newDiv.className = "grid-div" 
    newDiv.style.border = "1px rgb(190, 190, 190) solid";
    container.appendChild(newDiv);
}

container.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = "black";
})

clear.addEventListener('click', function() {
    for (let i = 0; i < 16*16; ++i) {
        divs[i].style.backgroundColor="lightgray";
    }
})


