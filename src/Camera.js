import { events } from "./Events";
import { GameObject } from "./GameObject";

export class Camera extends GameObject {
    constructor() {
        super({});

        events.on("HERO_POSITION", this, heroPosition => {
            console.log("Camera MOVES", heroPosition)
            this.position = heroPosition.duplicate();
        })
    }
}