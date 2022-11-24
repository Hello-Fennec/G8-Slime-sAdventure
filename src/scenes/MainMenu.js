import Phaser from "phaser";

let playButton;
let background;
let howButton;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: "MainMenu",
        });
    }

    preload() {
        this.load.image(
            "startButton",
            "src/scenes/image/assests/png/Objects/playButton.png"
        );
        this.load.image(
            "howButton",
            "src/scenes/image/assests/png/Objects/Howto.jpg"
        );
        this.load.image("bga", "src/scenes/image/assests/png/MainBack.jpg");
    }

    create() {
        playButton = this.add
            .image(600, 450, "startButton")
            .setScale(0.4)
            .setDepth(0.92);
        playButton.setInteractive();
        playButton.on("pointerdown", () => {
            this.scene.start("GameScene");
        });
        howButton = this.add
            .image(600, 650, "howButton")
            .setScale(0.4)
            .setDepth(0.92);
        howButton.setInteractive();
        howButton.on("pointerdown", () => {
            this.scene.start("Instruction");
        });
        background = this.add
            .image(630, 600, "bga")
            .setDepth(0.9)
            .setScale(1.25);
    }

    update(delta, time) {}
}
export default MainMenu;
