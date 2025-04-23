export const walls = new Set();

// lone tree right
walls.add(`224,32`);

walls.add(`64,48`); //tree left

//squares 4
walls.add(`64,64`);
walls.add(`64,80`);
walls.add(`80,64`);
walls.add(`80,80`);

// 2 squares
walls.add(`128,48`);
walls.add(`144,48`);

//water
walls.add(`112,80`);
walls.add(`128,80`);
walls.add(`144,80`);
walls.add(`160,80`);

// rocks
walls.add(`192,96`);
walls.add(`208,96`);
walls.add(`224,96`);

//tree & house
walls.add(`208,64`);
walls.add(`224,64`);



// exception for sky tiles
walls.add(`48,32`);
walls.add(`64,32`);
walls.add(`80,32`);
walls.add(`96,32`);
walls.add(`240,32`);


const tileSize = 16;
const mapWidth = 208;
const mapHeight = 80;
const xOffsetTop = 112;
const xOffsetBottom = 48;

const yOffset = 48;

for(let x = 0; x < mapWidth; x += tileSize) {
    walls.add(`${x + xOffsetTop},16`);
    walls.add(`${x +xOffsetBottom},112`);
}

for(let y = 0; y < mapHeight; y += tileSize) {
    walls.add(`32,${y + yOffset}`);
    walls.add(`256,${y + yOffset}`);
}
