const CONTAINER_HEIGHT = 40; // em

const create_div = (gridSize) => {
    const squareDivContainer = document.querySelector("#grid_container");
    const squareHeight = String(CONTAINER_HEIGHT / gridSize);
    for (i = 0; i < gridSize; i++) {
        const squareDivRowContainer = document.createElement("div");
        squareDivRowContainer.style.display = "flex";
        squareDivRowContainer.style.justifyContent = "stretch"
        squareDivRowContainer.style.width = "100%";
        squareDivContainer.appendChild(squareDivRowContainer);
        for (j = 0; j < gridSize; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute("class", "square-div");
            squareDiv.style.backgroundColor = "red";
            squareDiv.style.minHeight = `${squareHeight}em`;
            squareDiv.style.minWidth = `${squareHeight}em`;
            squareDiv.style.borderRadius = "10px";
            squareDiv.addEventListener("mouseover", () => {
                squareDiv.style.backgroundColor = "black";
            });
            squareDivRowContainer.appendChild(squareDiv);
        }
    }
}

create_div(64);