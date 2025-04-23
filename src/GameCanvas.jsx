import { useEffect, useRef, useState } from "react";
import { resources } from "./Resource.js"
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./vector2.js";
import { GameLoop } from "./GameLoop.js";
import { DOWN, Input, LEFT, RIGHT, UP } from "./Input.js";
import { grindCells, isSpaceFree } from "./helpers/Grid.js";
import { GameObject } from "./GameObject.js";
import { Hero } from "./objects/Hero/hero.js";
import { events } from "./Events.js";
import { Camera } from "./Camera.js";
import { ComputerIcon } from "./ComputerIcon.js";

const GameCanvas = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const interactionCooldownRef = useRef(false);
    const GAME_WIDTH = 320;
    const GAME_HEIGHT = 180;
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1024,
        height: typeof window !== 'undefined' ? window.innerHeight : 768
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getMaxWidth = () => {
        const { width } = screenSize;
        if (width >= 1920) return "1280px";       
        if (width >= 1280) return "960px";        
        if (width >= 768) return "720px";         
        return "100%";                            
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        const ctx = canvas.getContext("2d");

        function resizeCanvas() {

            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;

            canvas.width = GAME_WIDTH;
            canvas.height = GAME_HEIGHT;
            
            canvas.style.width = `${containerWidth}px`;
            canvas.style.height = `${containerHeight}px`;
            
            ctx.imageSmoothingEnabled = false;
        }

        const mainScene = new GameObject({
            position: new Vector2(0, 0)
        });

        const skySprite = new Sprite({
            resource: resources.images.sky,
            frameSize: new Vector2(320, 180),
        });

        const groundSprite = new Sprite({
            resource: resources.images.ground,
            frameSize: new Vector2(320, 180)
        });
        mainScene.addChild(groundSprite);

        const camera = new Camera();
        mainScene.addChild(camera);

        const hero = new Hero(grindCells(6), grindCells(5));
        mainScene.addChild(hero);

        events.on("HERO_POSITION", mainScene, heroPosition => {
            console.log("HEROMOVED", heroPosition);
        });

        const computer = new ComputerIcon(grindCells(10), grindCells(6));
        mainScene.addChild(computer);

        const handleKeyDown = (e) => {
            if (e.repeat) return;
            if ((e.code === "Space" || e.code === "Enter") && !interactionCooldownRef.current) {
                interactionCooldownRef.current = true;
                console.log(`Before interaction key: ${e.code}`);

                events.emit("INTERACTION_KEY_PRESSED");

                console.log(`After interaction key: ${e.code}`);

                setTimeout(() => {
                    interactionCooldownRef.current = false;
                }, 500);
            }

            events.emit("KEY_PRESSED", e.code);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("resize", resizeCanvas);

        mainScene.input = new Input();

        const update = (delta) => {
            mainScene.stepEntry(delta, mainScene);
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            skySprite.drawImage(ctx, 0, 0);

            ctx.save();

            ctx.translate(camera.position.x, camera.position.y);
            mainScene.draw(ctx, 0, 0);

            ctx.restore();
        };

        // Initial resize
        resizeCanvas();
        
        const gameLoop = new GameLoop(update, draw);
        gameLoop.start();

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [screenSize]);

    return (
        <div 
            ref={containerRef} 
            className="w-full mx-auto"
            style={{ 
                minHeight: "180px", 
                minWidth: "320px",
                aspectRatio: "16/9",
                maxWidth: getMaxWidth(),
                maxHeight: "calc(100vh - 48px)",
                position: "relative"
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    imageRendering: "pixelated"
                }}
            />
        </div>
    );
};

export default GameCanvas;