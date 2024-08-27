const create_div = (gridSize) => {
    const squareDivContainer = document.querySelector("#grid_container");
    const squareHeight = String(90 / gridSize);
    for (i = 0; i < gridSize; i++) {
        const squareDivRowContainer = document.createElement("div");
        squareDivRowContainer.style.display = "flex";
        squareDivRowContainer.style.justifyContent = "stretch"
        squareDivRowContainer.style.width = "100%";
        squareDivRowContainer.style.backgroundColor = "blue";
        squareDivContainer.appendChild(squareDivRowContainer);
        for (j = 0; j < gridSize; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute("class", "square-div");
            squareDiv.style.backgroundColor = "red";
            squareDiv.style.minHeight = `${squareHeight}vh`;
            squareDiv.style.minWidth = `${squareHeight}vw`;
            squareDiv.style.borderRadius = "10px";
            squareDivRowContainer.appendChild(squareDiv);
        }
    }
}

create_div(64);