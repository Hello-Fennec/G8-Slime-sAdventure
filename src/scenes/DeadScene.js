import Phaser from "phaser";

let retryButton;
let Background;

class DeadScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "DeadScene",
        });
    }

    preload() {
        this.load.image('Bg','/src/scenes/image/assests/png/bg2.png')
    }

    create() {
        
        retryButton = this.add
            .image(650, 600, "retryButton")
            .setScale(0.8)
            .setDepth(0.92);
        retryButton.setInteractive();
        retryButton.on("pointerdown", () => {
            this.scene.start("MainMenu");
        });

        Background = this.add.image(630,360,'Bg')
    }

    update(delta, time) {}
}
export default DeadScene;