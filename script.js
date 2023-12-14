const container = document.createElement('div'); // Create a container.
document.body.appendChild(container); // Append container to document body.
let blinkSpeed = 2000;

// Main function that creates and appends desired amount of tiles in checkerboard patter to container.
const createTiles = (container, numOfTiles) => {
    for (let j = 0; j < numOfTiles; j++) {
        const tile = document.createElement('div'); // Create the tile
        styleTiles(tile); // Apply styling to tiles (ln15).
        container.appendChild(tile); // Append finished tile to the container.
    }
}

// Helper function to set style for tiles in createTiles.
const styleTiles = (tile) => {
    tile.style.width = '12.5%';
    tile.style.height = '12.5%';
    blinkMe(tile, getRandomColor); // Set blinking attribute and changes random colors (ln22).
}

// Helper function that blinks tiles at a rate of 2 seconds.
const blinkMe = (elem, randomColorFunction) => {
    // Every 2 seconds, given element's visibility is changed and is assigned a new random color.
    setInterval(() => {
        elem.style.visibility = (elem.style.visibility === 'hidden') ? 'visible' : 'hidden';
        elem.style.backgroundColor = randomColorFunction(); // Set background color to random color (ln33.)
    }, blinkSpeed);
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