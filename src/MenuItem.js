import { GameObject } from "./GameObject";
import { Vector2 } from "./Vector2";

export class MenuItem extends GameObject {
  constructor(text, index, onClick) {
    super({
      position: new Vector2(20, 30 + index * 20),
    });
    
    this.text = text;
    this.index = index;
    this.onClick = onClick;
    this.isSelected = false;
  }
  
  setSelected(selected) {
    this.isSelected = selected;
  }
  
  drawImage(ctx, x, y) {
    if (this.isSelected) {
      ctx.fillStyle = "#ff0000";
      ctx.beginPath();
      ctx.moveTo(x - 12, y + 6);
      ctx.lineTo(x - 5, y + 6);
      ctx.lineTo(x - 8, y + 10);
      ctx.closePath();
      ctx.fill();
    }
    
    ctx.font = this.isSelected ? "bold 12px Arial" : "12px Arial";
    ctx.fillStyle = this.isSelected ? "#ff0000" : "#000000";
    ctx.textBaseline = "top";
    ctx.fillText(this.text, x, y);
    
    if (this.isSelected) {
      ctx.beginPath();
      ctx.moveTo(x, y + 14);
      ctx.lineTo(x + ctx.measureText(this.text).width, y + 14);
      ctx.strokeStyle = "#ff0000";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
}

