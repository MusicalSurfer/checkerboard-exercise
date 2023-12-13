const container = document.createElement('div'); // Create a container.
document.body.appendChild(container); // Append container to document body.

// Function that creates and appends desired amount of tiles in checkerboard patter to container.
const createTiles = (container, numOfTiles) => {
    let rows = Math.sqrt(numOfTiles); // Find how many rows are in given grid

    for (let i = 0; i < numOfTiles; i++) {
        const tile = document.createElement('div'); // Create the tile
        styleTiles(tile, i, rows); // Apply styling in checkerboard pattern.
        container.appendChild(tile); // Append finished tile to the container.
    }
}

// Helper function to set style for tiles in createTiles.
const styleTiles = (tile, index, rows) => {
    tile.style.width = '12.5%';
    tile.style.height = '12.5%';
    if ((index + Math.floor(index / rows)) % 2 === 0) {
        tile.style.backgroundColor = 'red';
    }
    else {
        tile.style.backgroundColor = 'black';
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