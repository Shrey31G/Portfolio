import { events } from "./Events";
import { GameObject } from "./GameObject";
import { resources } from "./Resource";
import { Sprite } from "./Sprite";
import { Vector2 } from "./Vector2";
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
      console.log("INTERACTION_KEY_PRESSED handler called in ComputerIcon");
      if (this.isOverLapping && !this.isMenuOpen) {
        this.openMenu();
      }
    });

    events.on("CLOSE_MENU", this, () => {
      if (this.isMenuOpen) {
        this.closeMenu();
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
    if(this.isMenuOpen) {
      console.log("Menu already open, ignoring duplicate open request");
      return;
    }
    this.isMenuOpen = true;
    console.log("opening Menu");
    this.portfolioMenu = new PortfolioMenu();
    console.log("after portfolio menu made")
    this.addChild(this.portfolioMenu);
    console.log("after adding child in portfolio but before stopping movement")
    events.emit("PAUSE_HERO_MOVEMENT");
    console.log("after pausing movement xd")
  }

  closeMenu() {
    this.isMenuOpen = false;
    console.log("Closing menu");

    if (this.portfolioMenu) {
      this.portfolioMenu.destroy();
      this.portfolioMenu = null;
    }
    events.emit("RESUME_HERO_MOVEMENT");
  }
}
