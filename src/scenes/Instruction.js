import Phaser from "phaser";

let background;
let backbutton;

class Instruction extends Phaser.Scene {
    constructor(test) {
        super({
            key: "Instruction",
        });
    }

    preload() {
        this.load.image(
            "bgac",
            "src/scenes/image/assests/png/howtoBackground.jpeg"
        );
        this.load.image(
            "backbutton",
            "src/scenes/image/assests/png/Objects/back.png"
        );
    }

    create() {
        background = this.add
            .image(630, 430, "bgac")
            .setDepth(0.9)
            .setScale(0.9);
        backbutton = this.add
            .image(300, 590, "backbutton")
            .setScale(0.3)
            .setDepth(0.92);
        backbutton.setInteractive();
        backbutton.on("pointerdown", () => {
            this.scene.start("MainMenu");
        });
    }

    update(delta, time) {}
}
export default Instruction;
