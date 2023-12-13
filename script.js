const container = document.createElement('div'); // Create a container.
document.body.appendChild(container); // Append container to document body.

// Function that creates and appends desired amount of tiles in a gradient.
const createTiles = (container, numOfTiles) => {
    let rows = Math.sqrt(numOfTiles); // Find how many rows are in given grid
    let firstRgbValue = [230, 0, 20]; // Set first color value
    let secondRgbValue = [255, 0, 0]; // Set second color value

    // For every tile created, style and update color values to create a gradient.
    for (let i = 0; i < numOfTiles; i++) {
        const tile = document.createElement('div'); // Create the tile
        styleTiles(tile, i, rows, firstRgbValue, secondRgbValue); // Apply styling in gradient pattern (ln19).
        container.appendChild(tile); // Append finished tile to the container.
    }
}

// Helper function to set style for tiles in createTiles.
const styleTiles = (tile, index, rows, color1, color2) => {

    // Store color values in loop so they are updated each iteration.
    let firstRgb = 'rgb(' + color1[0] + ', ' + color1[1] + ', ' + color1[2] + ')';
    let secondRgb = 'rgb(' + color2[0] + ', ' + color2[1] + ', ' + color2[2] + ')';
    // Set grid size for tile.
    tile.style.width = '12.5%';
    tile.style.height = '12.5%';

    // Tracks when a row is completed and flips from 0 to 1 or back to 0 when starting a new row due to modular arithmetic.
    if ((index + Math.floor(index / rows)) % 2 === 0) {
        tile.style.backgroundColor = firstRgb;
    }
    else {
        tile.style.backgroundColor = secondRgb;
    }
    // Increment rgb values up by 5 for each color to create gradient.
    color1[1] += 5;
    color2[1] += 5;
}
// Function to set style for container.
const styleContainer = (container) => {
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '800px';
    container.style.height = '800px';
}

styleContainer(container); // Style container (ln37).
createTiles(container, 64); // Create desired tiles.