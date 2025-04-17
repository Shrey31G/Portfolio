import { useEffect, useRef } from "react";
import { resources } from "./Resource.js"
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./vector2.js";
import { GameLoop } from "./GameLoop.js";
import { DOWN, Input, LEFT, RIGHT, UP } from "./Input.js";
import { grindCells, isSpaceFree } from "./helpers/Grid.js";
import { moveTowards } from "./helpers/moveTowards.js";
import { GameObject } from "./GameObject.js";
import { Hero } from "./objects/Hero/hero.js";
import { events } from "./Events.js";
import { Camera } from "./Camera.js";

const GameCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const mainScene = new GameObject({
            position: new Vector2(0, 0)
        })

        const skySprite = new Sprite({
            resource: resources.images.sky,
            frameSize: new Vector2(320, 180),
        })
        mainScene.addChild(skySprite);

        const groundSprite = new Sprite({
            resource: resources.images.ground,
            frameSize: new Vector2(320, 180)
        })
        mainScene.addChild(groundSprite);

        const camera = new Camera();
        mainScene.addChild(camera);

        const hero = new Hero(grindCells(6), grindCells(5));
        mainScene.addChild(hero);

        events.on("HERO_POSITION", mainScene, heroPosition => {
            console.log("HEROMOVED", heroPosition);
        })

        mainScene.input = new Input();

        const update = (delta) => {

            mainScene.stepEntry(delta, mainScene);
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // save current state for camera effect
            ctx.save();
            mainScene.draw(ctx, 0, 0);
        }

        const gameLoop = new GameLoop(update, draw);
        gameLoop.start();
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