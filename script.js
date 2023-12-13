const container = document.createElement('div'); // Create a container.
document.body.appendChild(container); // Append container to document body.

// Function that creates and appends desired amount of tiles in checkerboard patter to container.
const createTiles = (container, numOfTiles) => {
    let rows = Math.sqrt(numOfTiles); // Find how many rows are in given grid
    let tilesPerRow = Math.sqrt(numOfTiles); // Assuming it's a square, find how many tiles will be in each row.
    let rowComplete = false; // Flag to store if a row has been iterated through.
    let firstRgbValue = [150, 120, 150];
    let secondRgbValue = [170, 120, 150];
    let firstRgb = 'rgb(' + secondRgbValue[0] + ', ' + secondRgbValue[1] + ', ' + secondRgbValue[2] + ')';
    let secondRgb = 'rgb(' + firstRgbValue[0] + ', ' + firstRgbValue[1] + ', ' + firstRgbValue[2] + ')';

    // For every row...
    for (let i = 0; i < rows; i++) {
        // For every tile...
        for (let j = 0; j < tilesPerRow; j++) {
            const tile = document.createElement('div'); // Create the tile
            styleTiles(tile, j, rowComplete, firstRgb, secondRgb); // Apply styling in checkerboard pattern.
            container.appendChild(tile); // Append finished tile to the container.
        }
        (!rowComplete) ? rowComplete = true : rowComplete = false; // Once row is complete, flip flag to change styling.
    }
}

// Helper function to set style for tiles in createTiles.
const styleTiles = (tile, index, rowComplete, firstRgb, secondRgb) => {
    tile.style.width = '12.5%';
    tile.style.height = '12.5%';

    // If flag is false, apply default styling, otherwise apply next row style.
    if (!rowComplete) {
        // If index is even apply red, otherwise apply black.
        (index % 2 === 0) ? tile.style.backgroundColor = firstRgb : tile.style.backgroundColor = secondRgb;
    }
    else {
        // If index is odd apply red, otherwise apply black.
        (index % 2 === 1) ? tile.style.backgroundColor = 'red' : tile.style.backgroundColor = 'black';
    }
}

// Function to set style for container.
const styleContainer = (container) => {
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '800px';
    container.style.height = '800px';
}

styleContainer(container); // Style container
createTiles(container, 64); // Create desired tiles.