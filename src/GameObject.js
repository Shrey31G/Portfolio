import {Vector2} from './Vector2.js'
export class GameObject {
    constructor({postition}) {
        this.position = postition ?? new Vector2(0,0);
        this.children = [];
        
    }

    step(delta) {
        //
    }
}