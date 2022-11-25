import Phaser from "phaser";

let retryButton;
let background;

class DeadScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "DeadScene",
        });
    }

    preload() {
        this.load.image(
            "retryButton",
            "src/scenes/image/assests/png/Objects/retry.png"
        );
        this.load.image(
            "rbg",
            "src/scenes/image/assests/png/retrybackground.PNG"
        );
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
        background = this.add.image(630, 600, "rbg").setDepth(0.9).setScale(1);
    }

    update(delta, time) {}
}
export default DeadScene;
