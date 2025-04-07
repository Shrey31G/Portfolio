
export class GameLoop {
    constructor(update, render) {
        
        this.lastFrameTime = 0;
        this.accumulatedTime = 0;
        this.timeStep = 1000/60; // 60 frames per seconds

        this.update = update;
        this.render = render;

        this.rafId = null // request animation frame ID
        this.isRunning = false;
    }
    
    mainLoop = (timestamp) => {
        if(!this.isRunning) return;

        let deltaTime = timestamp - this.lastFrameTime;
        this.lastFrameTime = timestamp;
        // here i accumulate all time since the last frame.
        this.accumulatedTime += deltaTime;

        //fixing the time step updates.
        //if enuf acuu. time to run one or more fixed updates
        while(this.accumulatedTime >= this.timeStep) {
            this.update(this.timeStep);
            this.accumulatedTime -= this.timeStep; // downtick krdiya bhaiya
        }

        this.render();

        // fire it right before it  repaints better than looping as loop would be very fast
        this.rafId = requestAnimationFrame(this.mainLoop)
    }

    start() {
        if(!this.isRunning) {
            this.isRunning = true;
            this.rafId = requestAnimationFrame(this.mainLoop);
        }
    }

    stop() {
        if(this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        this.isRunning = false;
    }
}