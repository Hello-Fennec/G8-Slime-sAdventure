import Phaser from "phaser";
let background;
let foreground;
let sky;
let slime;
let grass;
let cursors;
let event;
let bullet;
let bulletGroup;
let ArrowSign;
class GameScene3 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene3",
        });
    }

    preload() {
        this.load.image(
            "bg",
            "src/scenes/image/backgrounds/png/bg02/Layers/Middle_Decor.png"
        );
        this.load.image(
            "sk",
            "src/scenes/image/backgrounds/png/bg02/Layers/Sky.png"
        );
        this.load.image(
            "gl",
            "src/scenes/image/backgrounds/png/bg02/Layers/Ground.png"
        );
        this.load.image(
            "fg",
            "src/scenes/image/backgrounds/png/bg02/Layers/Foreground.png"
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
            "bullet",
            "src/scenes/image/assests/png/Tiles/Bone2.png"
        );
    }

    create() {
        //prop
        background = this.add
            .image(600, 350, "bg")
            .setDepth(0.91)
            .setScale(0.7);
        background = this.add
            .image(600, 350, "fg")
            .setDepth(0.92)
            .setScale(0.7);
        grass = this.add.image(600, 390, "gl").setDepth(0.97).setScale(0.7);
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
        bulletGroup = this.physics.add.group();
        event = this.time.addEvent({
            delay: 2000,
            callback: function () {
                bullet = this.physics.add.image(
                    Math.floor(Math.random() * 1000) + 101,
                    0,
                    "bullet"
                );
                bullet.setScale(0.25);
                bullet.setDepth(0.94);
                bulletGroup.add(bullet);
                bulletGroup.setVelocityY(200);
            },
            callbackScope: this,
            loop: true,
        });
        cursors = this.input.keyboard.createCursorKeys();
        slime.setGravityY(2000);
        slime.setBounce(0.1);
        slime.setCollideWorldBounds(true);
        this.physics.add.collider(slime, bulletGroup, () => {
            this.scene.start("MainMenu");
        });
    }

    update(delta, time) {
        if (cursors.left.isDown) {
            slime.setVelocityX(-80);
        } else if (cursors.right.isDown) {
            slime.setVelocityX(80);
        } else {
            slime.setVelocityX(0);
        }
        slime.anims.play("slimeAni", true);
        for (let i = 0; i < bulletGroup.getChildren().length; i++) {
            if (bulletGroup.getChildren()[i].y > 700) {
                bulletGroup.getChildren()[i].destroy();
            }
        }
    }
}
export default GameScene3;
