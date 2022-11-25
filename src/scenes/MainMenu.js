import Phaser from "phaser";

let playButton;
let background;
let howButton;
let slime;

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
        this.load.spritesheet(
            "slime",
            "src/scenes/image/Slimes/slimeIdle2/SlimeBlue2.png",
            {
                frameWidth: 80,
                frameHeight: 54,
            }
        );
    }

    create() {
        slime = this.physics.add
            .sprite(100, 100, "slime")
            .setScale(4)
            .setDepth(0.96)
            .setSize(20, 20)
            .setOffset(25, 13)
            .setVisible(false);
        this.anims.create({
            key: "slimeAni",
            frames: this.anims.generateFrameNumbers("slime", {
                start: 1,
                end: 7,
            }),
            duration: 700,
            repeat: -1,
        });
        playButton = this.add
            .image(600, 450, "startButton")
            .setScale(0.4)
            .setDepth(0.92);
        playButton.setInteractive();
        playButton.on("pointerdown", () => {
            this.scene.start("GameScene");
        });
        playButton.on("pointerover", () => {
            slime.setVisible(true);
            slime.x = playButton.x - 200;
            slime.y = playButton.y;
            slime.setScale(4);
        });
        playButton.on("pointerout", () => {
            slime.setVisible(false);
        });
        howButton = this.add
            .image(600, 650, "howButton")
            .setScale(0.4)
            .setDepth(0.92);
        howButton.setInteractive();
        howButton.on("pointerdown", () => {
            this.scene.start("Instruction");
        });
        howButton.on("pointerover", () => {
            slime.setVisible(true);
            slime.x = howButton.x - 160;
            slime.y = howButton.y;
            slime.setScale(3);
        });
        howButton.on("pointerout", () => {
            slime.setVisible(false);
        });
        background = this.add
            .image(630, 600, "bga")
            .setDepth(0.9)
            .setScale(1.25);
    }

    update(delta, time) {
        slime.anims.play("slimeAni", true);
    }
}
export default MainMenu;
