import { events } from "./Events";
import { GameObject } from "./GameObject";
import { resources } from "./Resource";
import { Sprite } from "./Sprite";
import { Vector2 } from "./vector2";
import { PortfolioMenu } from "./PortfolioMenu";
import { InteractionPrompt } from "./InteractionPrompt";

export class ComputerIcon extends GameObject {
  constructor(x, y) {
    super({
      position: new Vector2(x, y),
    });

    const sprite = new Sprite({
      resource: resources.images.rod,
      position: new Vector2(0, -5),
    });

    this.addChild(sprite);

    this.interactionPrompt = new InteractionPrompt();
    this.addChild(this.interactionPrompt);

    this.isOverLapping = false;
    this.isMenuOpen = false;
    this.interactionDistance = 20;

    events.on("HERO_POSITION", this, (pos) => {
      const dx = this.position.x - pos.x;
      const dy = this.position.y - pos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= this.interactionDistance) {
        if (!this.isOverLapping) {
          this.isOverLapping = true;
          this.showInteractionPrompt();
        }
      } else {
        if (this.isOverLapping) {
          this.isOverLapping = false;
          this.hideInteractPrompt();

          if (this.isMenuOpen) {
            this.closeMenu();
          }
        }
      }
    });

    events.on("INTERACTION_KEY_PRESSED", this, () => {
      if (this.isOverLapping) {
        if (this.isMenuOpen) {
          this.closeMenu();
        } else {
          this.openMenu();
        }
      }
    });
  }

  showInteractionPrompt() {
    console.log("Can interact with computer");
    this.interactionPrompt.show();
  }

  hideInteractPrompt() {
    console.log("Cannot interact with computer");
    this.interactionPrompt.hide();
  }

  openMenu() {
    this.isMenuOpen = true;
    console.log("opening Menu");
    this.portfolioMenu = new PortfolioMenu();
    this.addChild(this.portfolioMenu);

    events.emit("PAUSE_HERO_MOVEMENT");
  }
  
  closeMenu() {
    this.isMenuOpen = false;
    console.log("Closing menu");

    if(this.portfolioMenu) {
        this.portfolioMenu.destroy();
        this.portfolioMenu = null;
    }
    events.emit("RESUME_HERO_MOVEMENT");
  }
}
