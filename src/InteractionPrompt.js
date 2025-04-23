import { GameObject } from "./GameObject";
import { Vector2 } from "./Vector2";

export class InteractionPrompt extends GameObject {
  constructor() {
    super({
      position: new Vector2(-27, -30),
    });
    this.opacity = 0;
    this.targetOpacity = 1;
    this.fadeSpeed = 0.1;
  }

  step(delta) {
    if (this.opacity < this.targetOpacity) {
      this.opacity = Math.min(
        this.opacity + this.fadeSpeed,
        this.targetOpacity
      );
    } else if (this.opacity > this.targetOpacity) {
      this.opacity = Math.max(
        this.opacity - this.fadeSpeed,
        this.targetOpacity
      );
    }
  }

  drawImage(ctx, x, y) {
    if (this.opacity <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.opacity;

    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;

    const width = 70;
    const height = 20;
    const radius = 5;

    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + width / 2 - 5, y + height);
    ctx.lineTo(x + width / 2, y + height + 5);
    ctx.lineTo(x + width / 2 + 5, y + height);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#000";
    ctx.font = "10px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Press Enter", x + width / 2, y + height / 2);

    ctx.restore();
  }

  show() {
    this.targetOpacity = 1;
  }

  hide () {
    this.targetOpacity = 0;
  }
}
