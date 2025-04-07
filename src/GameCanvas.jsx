import { useEffect, useRef } from "react";
import { resources } from "./Resource.js"
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./vector2.js";

const GameCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const skySprite = new Sprite({
            resource: resources.images.sky,
            frameSize: new Vector2(320, 180),
        })

        const groundSprite = new Sprite({
            resource: resources.images.ground,
            frameSize: new Vector2(320, 180)
        })

        const hero = new Sprite({
            resource: resources.images.hero,
            frameSize: new Vector2(32, 32),
            hFrames: 3,
            vFrames: 8,
            frame: 4
        })

        const heroPos = new Vector2(16* 5, 16 * 5);        

        const draw = () => {
            skySprite.drawImage(ctx, 0, 0);
            groundSprite.drawImage(ctx, 0, 0);
            hero.drawImage(ctx, heroPos.x, heroPos.y);
        }

        setInterval(() => {
            draw();
        }, 300)
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={320}
            height={180}
        />
    )
}

export default GameCanvas;