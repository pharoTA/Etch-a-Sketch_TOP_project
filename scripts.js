const CONTAINER_HEIGHT = 40; // em

const cleanGrid = () => {
    const squareDivContainer = document.querySelector("#grid_container");
    while (squareDivContainer.firstChild) {
        squareDivContainer.removeChild(squareDivContainer.firstChild);
    }
};

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
            squareDiv.style.opacity = "1";
            squareDiv.addEventListener("mouseover", () => {
                const greenValue = Math.floor(Math.random() * 255);
                const redValue = Math.floor(Math.random() * 255);
                const blueValue = Math.floor(Math.random() * 255);
                if (squareDiv.style.opacity > 0) {
                    squareDiv.style.opacity = String(squareDiv.style.opacity - 0.1);
                }
                squareDiv.style.backgroundColor = `RGB(${redValue}, ${greenValue}, ${blueValue})`;
            });
            squareDivRowContainer.appendChild(squareDiv);
        }
    }
}

create_div(64);

const generateGridButton = document.querySelector("#generateGridButton");
generateGridButton.addEventListener("click", () => {
    const inputGridSize = document.querySelector("#inputGridSize");
    cleanGrid();
    create_div(inputGridSize.value);
})