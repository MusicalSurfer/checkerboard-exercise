// Function to create a tile element
function createTile() {
    const tile = document.createElement('div');
    tile.style.width = "12.5%";
    tile.style.height = "12.5%";
    tile.style.border = "1px solid #000"; // Just for visualization
    return tile;
}

//Function to create and append tiles to the container
function createTiles(container, numTiles) {
    for (let i = 0; i < numTiles; i++) {
        const tile = createTile();
        container.appendChild(tile);
    }
}

// Function to set styles for the container
function setContainerStyles(container) {
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '800px';
    container.style.height = '800px';
    container.style.border = '1px solid #000'; // Just for visualization
}

// Get the container element by ID
const container = document.createElement('div');
container.id = 'tileContainer';

// Append the container to the body
document.body.appendChild(container);

// Set the styles for the container
setContainerStyles(container);

// Create and append the tiles to the container
createTiles(container, 64);