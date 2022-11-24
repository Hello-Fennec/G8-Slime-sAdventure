import Phaser from "phaser";
let background;
let foreground;
let sky;
let slime;
let grass;
let cursors;
let crate;
let crate2;
let crate3;
let crate4;
let movingcrate;
let sign;
class GameScene2 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene2",
        });
    }

    preload() {
        this.load.image(
            "bg",
            "src/scenes/image/backgrounds/png/bg04/Layers/Middle_Decor.png"
        );
        this.load.image(
            "sk",
            "src/scenes/image/backgrounds/png/bg04/Layers/Sky.png"
        );
        this.load.image(
            "gl",
            "src/scenes/image/backgrounds/png/bg04/Layers/Ground.png"
        );
        this.load.image(
            "fg",
            "src/scenes/image/backgrounds/png/bg04/Layers/Foreground.png"
        );
        this.load.spritesheet(
            "slime",
            "src/scenes/image/Slimes/slimeIdle2/SlimeBlue2.png",
            {
                frameWidth: 80,
                frameHeight: 54,
            }
        );
        this.load.image("ct", "src/scenes/image/assests/png/Objects/Crate.png");
        this.load.image(
            "as",
            "src/scenes/image/assests/png/Objects/ArrowSign.png"
        );
    }

    create() {
        //prop
        crate = this.physics.add
            .image(200, 670, "ct")
            .setDepth(0.94)
            .setSize(105, 100)
            .setOffset(0, 0);
        crate2 = this.physics.add
            .image(200, 570, "ct")
            .setDepth(0.94)
            .setSize(105, 100)
            .setOffset(0, 0);
        crate3 = this.physics.add
            .image(900, 570, "ct")
            .setDepth(0.94)
            .setSize(105, 100)
            .setOffset(0, 0);
        crate4 = this.physics.add
            .image(900, 670, "ct")
            .setDepth(0.94)
            .setSize(105, 100)
            .setOffset(0, 0);
        background = this.add
            .image(600, 350, "bg")
            .setDepth(0.91)
            .setScale(0.7);
        sign = this.physics.add.image(1210, 685, "as").setDepth(0.94);
        background = this.add
            .image(600, 350, "fg")
            .setDepth(0.92)
            .setScale(0.7);
        grass = this.physics.add;
        grass = this.physics.add
            .image(550, 570, "gl")
            .setDepth(0.97)
            .setScale(0.3)
            .setOffset(25, 900);
        sky = this.add.image(650, 350, "sk").setDepth(0.9).setScale(0.7);
        slime = this.physics.add
            .sprite(100, 680, "slime")
            .setScale(4)
            .setDepth(0.96)
            .setSize(20, 20)
            .setOffset(25, 13);
        this.anims.create({
            key: "slimeAni",
            frames: this.anims.generateFrameNumbers("slime", {
                start: 1,
                end: 7,
            }),
            duration: 700,
            repeat: -1,
        });
        //moving
        movingcrate = this.physics.add
            .image(300, 550, "ct")
            .setDepth(0.94)
            .setScale(0.6)
            .setVelocityX(100, -100)
            .setImmovable(true);

        //movingcrate.body.setAllowGravity(false);
        this.physics.add.collider(movingcrate, crate);
        this.physics.add.collider(movingcrate, crate2, () => {
            movingcrate.setVelocityX(100, 100);
        });
        this.physics.add.collider(movingcrate, crate3, () => {
            movingcrate.setVelocityX(-100, 100);
        });
        this.physics.add.collider(movingcrate, crate4);

        cursors = this.input.keyboard.createCursorKeys();
        slime.setGravityY(2000);
        slime.setBounce(0.1);
        this.physics.add.collider(slime, crate);
        this.physics.add.collider(slime, crate2);
        this.physics.add.collider(slime, crate3);
        this.physics.add.collider(slime, crate4);
        this.physics.add.collider(slime, grass, () => {
            this.scene.start("GameScene");
        });
        this.physics.add.collider(slime, sign, () => {
            this.scene.start("GameScene3");
        });
        this.physics.add.collider(movingcrate, slime);
        slime.setCollideWorldBounds(true);
        crate.setCollideWorldBounds(true);
        crate.setImmovable();
        crate2.setCollideWorldBounds(true);
        crate2.setImmovable();
        crate3.setCollideWorldBounds(true);
        crate3.setImmovable();
        crate4.setCollideWorldBounds(true);
        crate4.setImmovable();
    }

    update(delta, time) {
        if (cursors.left.isDown) {
            slime.setVelocityX(-160);
        } else if (cursors.right.isDown) {
            slime.setVelocityX(160);
        } else {
            slime.setVelocityX(0);
        }
        slime.anims.play("slimeAni", true);
        if (cursors.up.isDown) {
            slime.setVelocityY(-330);
        }
    }
}
export default GameScene2;
