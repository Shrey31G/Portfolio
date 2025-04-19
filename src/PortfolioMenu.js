import { events } from "./Events";
import { GameObject } from "./GameObject";
import { MenuItem } from "./MenuItem";
import { Vector2 } from "./vector2";

export class PortfolioMenu extends GameObject {
  constructor() {
    super({
      position: new Vector2(0, -50),
    });

    this.createScrollBackground();

    this.menuItems = [];
    this.selectedIndex = 0;

    this.addMenuItem("GitHub", 0, () => {
      console.log("Opening GitHub");
      window.open("https://github.com/Shrey31G", "_blank");
    });

    this.addMenuItem("LinkedIn", 1, () => {
      console.log("Opening LinkedIn");
      window.open(
        "https://www.linkedin.com/in/shrey-gangwar-712233225/",
        "_blank"
      );
    });

    this.addMenuItem("Projects", 2, () => {
      console.log("Opening Projects");
      window.open("/projects", "_blank");
    });

    this.addMenuItem("Resume", 3, () => {
      console.log("Opening Resume");
      window.open("/resume", "_blank");
    });

    this.updateSelectedItem();
    this.setupKeyControls();
  }

  setupKeyControls() {
    this.inputCooldown = true;

    setTimeout(() => {
      this.inputCooldown = false;
    }, 200); 

    this.keyPressHandler = (keyCode) => {
      if (this.inputCooldown) return;

      if (keyCode === "ArrowUp" || keyCode === "KeyW") {
        this.selectedIndex = Math.max(0, this.selectedIndex - 1);
        this.updateSelectedItem();
      } else if (keyCode === "ArrowDown" || keyCode === "KeyS") {
        this.selectedIndex = Math.min(
          this.menuItems.length - 1,
          this.selectedIndex + 1
        );
        this.updateSelectedItem();
      } else if (keyCode === "Enter" || keyCode === "Space") {
        const selectedAction = this.menuItems[this.selectedIndex].onClick;


        setTimeout(() => {
          selectedAction();
          events.emit("CLOSE_MENU")
        }, 50);
      }
    };

    events.on("KEY_PRESSED", this, this.keyPressHandler);
  }

  destroy() {
    events.unsubscribe(this);
    super.destroy();
  }

  updateSelectedItem() {
    this.menuItems.forEach((item, index) => {
      item.setSelected(index === this.selectedIndex);
    });
  }

  createScrollBackground() {
    this.background = new GameObject({
      position: new Vector2(0, 0),
    });
    this.background.drawImage = (ctx, x, y) => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2;

      const width = 150;
      const height = 120;
      const radius = 10;

      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
      );
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();

      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x + 10, y + 10);
      ctx.lineTo(x + width - 10, y + 10);
      ctx.strokeStyle = "#999";
      ctx.lineWidth = 1;
      ctx.stroke();
    };
    this.addChild(this.background);
  }

  addMenuItem(text, index, onClick) {
    const menuItem = new MenuItem(text, index, onClick);
    this.menuItems.push(menuItem);
    this.addChild(menuItem);
  }
}
