import { walls } from "../levels/level1";

export const grindCells = n => {
    return n * 16;
}

export const isSpaceFree = (wall, x, y) => {
    //converting to string for easy lookup

    const str = `${x},${y}`;
    const isWallPresent = walls.has(str);

    return !isWallPresent;
}