import { events } from "./Events";
import { GameObject } from "./GameObject";
import { resources } from "./Resource";
import { Sprite } from "./Sprite";
import { Vector2 } from "./vector2";
import { PortfolioMenu } from "./PortfolioMenu";

export class ComputerIcon extends GameObject {
    constructor(x,y) {
        super({
            position: new Vector2(x,y),
        });

        const sprite = new Sprite({
            resource: resources.images.rod,
            position: new Vector2(0,-5)
        })

        this.addChild(sprite);

        this.isOverlapping = false;
        this.isMenuOpen = false;
        this.interactionDistance = 20;

        events.on("HERO_POSITION", this, (pos) => {
            const dx = this.position.x - pos.x;
            const dy = this.position.y - pos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if(distance <= this.interactionDistance) {
                if(!this.isOverlapping) {
                    this.isOverlapping = true;
                    this.showInteractionPrompt();
                }
            } else {
                if(this.isOverlapping) {
                    this.isOverlapping = false;
                    this.hideInteractionPrompt();

                    if(this.isMenuOpen) {
                        this.closeMenu();
                    }
                }
            }
        });

        events.on("INTERACTION_KEY_PRESSED", this, () => {
            if(this.isOverlapping) {
                if(this.isMenuOpen) {
                    this.closeMenu();
                } else {
                    this.openMenu();
                }
            }
        })
    }
    
    showInteractionPrompt() {
        console.log("Can interact with computer");
        events.emit("SHOW_INTERACTION_PROMPT", {position: this.position});
    }

    hideInteractionPrompt() {
        console.log("Cannot interact with computer");
        events.emit("HIDE_INTERACTION_PROMPT");
    }

    openMenu() {
        this.isMenuOpen = true;
        console.log("Opening Portfolio menu");
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