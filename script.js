const container = document.createElement('div'); // Create a container.
document.body.appendChild(container); // Append container to document body.

// Function that creates and appends desired amount of tiles in checkerboard patter to container.
const createTiles = (container, numOfTiles) => {
    for (let j = 0; j < numOfTiles; j++) {
        const tile = document.createElement('div'); // Create the tile
        styleTiles(tile, getRandomColor); // Apply styling in checkerboard pattern.
        container.appendChild(tile); // Append finished tile to the container.
    }
}

// Helper function to set style for tiles in createTiles.
const styleTiles = (tile, randomColorFunction) => {
    tile.style.width = '12.5%';
    tile.style.height = '12.5%';
    tile.style.backgroundColor = randomColorFunction();
}

// Helper function to get random hex color.
const getRandomColor = () => {
    let hexLetters = '0123456789ABSDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        randomColor += hexLetters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
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