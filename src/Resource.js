
class Resources {
    constructor() {
        // what i will download
        this.toLoad = {
            sky: "/sprites/sky.png",
            ground: "/sprites/ground.png",
            hero: "/sprites/hero-sheet.png",
            shadow: "/sprites/shadow.png",
            rod: "/sprites/rod.png"
        };

        // bucket to keep all images
        this.images = {};
        // Load each image

        Object.keys(this.toLoad).forEach(key => {
                const  img = new Image();
                img.src = this.toLoad[key]; //first key as sky and this has the key for sky
                this.images[key] = {
                    image: img,
                    isLoaded: false // to know if its downloaded before extraction before trying to draw
                }
                img.onload = () => {
                    this.images[key].isLoaded = true
                }
        });
    }
}

// Create one instance for the whole app to use
export const resources = new Resources();