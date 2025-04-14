import { Vector2 } from "./vector2";

export class Sprite {
  constructor({
    resource, // image we want to draw
    frameSize, // size of crop of the image
    hFrames, // how sprite arranged hori.
    vFrames, // how sprite arragned vertically
    frame, // which frame we want to show
    scale, // how large this image
    position, // where to draw (left corner top)
    animations,
  }) {
    this.resource = resource;
    this.frameSize = frameSize ?? new Vector2(16, 16);
    this.hFrames = hFrames ?? 1;
    this.vFrames = vFrames ?? 1;
    this.frame = frame ?? 0;
    this.frameMap = new Map();
    this.scale = scale ?? 1;
    this.position = position ?? new Vector2(0,0);
    this.animations = animations ?? null;
    this.buildFrameMap();
  }

  buildFrameMap() {
    let frameCount = 0;
    for (let v = 0; v < this.vFrames; v++) {
      for (let h = 0; h < this.hFrames; h++) {
        this.frameMap.set(
          frameCount,
          new Vector2(this.frameSize.x * h, this.frameSize.y * v)
        );
        frameCount++;
      }
    }
  }

  step(delta) {
    if(!this.animations) {
      return;
    } 
    this.animations.step(delta);
    this.frame = this.animations.frame;
  }

  drawImage(ctx, x, y) {
    if(!this.resource.isLoaded) {
        return;
    }
    let frameCoordX = 0;
    let frameCoordY = 0;
    const frame = this.frameMap.get(this.frame);
    if(frame) {
        frameCoordX = frame.x;
        frameCoordY = frame.y;
    } 
    const frameSizeX = this.frameSize.x;
    const frameSizeY = this.frameSize.y;
    ctx.drawImage(
        this.resource.image,
        frameCoordX,
        frameCoordY, // tio y corner of frame
        frameSizeX, // how much to crop from sprite sheet X
        frameSizeY, // same for Y
        x,  // where to place this on canvas tag X (0)
        y,  // where to place this on canvas tag Y (0)
        frameSizeX * this.scale,  // how large to scale it (x)
        frameSizeY * this.scale
    )
  }
}
