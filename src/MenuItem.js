import { events } from "./Events";
import { GameObject } from "./GameObject";
import { Vector2 } from "./vector2";

export class MenuItem extends GameObject {
  constructor(text, index, onClick) {
    super({
      position: new Vector2(20, 30 + index * 20),
    });

    this.text = text;
    this.index = index;
    this.onClick = onClick;
    this.isHovered = false;

    events.on("MOUSE_MOVED", this, (mousePos) => {
      const bounds = this.getBounds();
      if (
        mousePos.x >= bounds.x &&
        mousePos.x <= bounds.x + bounds.width &&
        mousePos.y >= bounds.y &&
        mousePos.y <= bounds.y + bounds.height
      ) {
        this.isHovered = true;
      } else {
        this.isHovered = false;
      }
    });
    events.on("MOUSE_CLICKED", this, (mousePos) => {
      events.emit("MENU_ITEM_CLICKED", this.index);
    });
  }

  getBounds() {
    let globalX = this.position.x;
    let globalY = this.position.y;
    let parent = this.parent;

    while (parent) {
      globalX += parent.position.x;
      globalY += parent.position.y;
      parent = parent.parent;
    }

    return {
      x: globalX,
      y: globalY,
      width: 110,
      height: 20,
    };
  }
  drawImage(ctx, x, y) {
    // Draw the menu item text
    ctx.font = this.isHovered ? "bold 12px Arial" : "12px Arial";
    ctx.fillStyle = this.isHovered ? "#ff0000" : "#000000";
    ctx.textBaseline = "top";
    ctx.fillText(this.text, x, y);

    // Draw underline if hovered
    if (this.isHovered) {
      ctx.beginPath();
      ctx.moveTo(x, y + 14);
      ctx.lineTo(x + ctx.measureText(this.text).width, y + 14);
      ctx.strokeStyle = "#ff0000";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
}
