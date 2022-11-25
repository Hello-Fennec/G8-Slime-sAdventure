import Phaser from "phaser";
let background;
let foreground;
let sky;
let slime;
let grass;
let cursors;
let event;
let bird;
let birdGroup;
let spike;
let spike2;
let spike3;
let spike4;
let spike5;
let spike6;
let spikeDown;
let spikeDown2;
let spikeDown3;
let crate;
let crate2;
let crate3;
let crate4;
let crate5;
let crate6;
let crate7;
let ArrowSign;
class GameScene4 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene4",
        });
    }

    preload() {
        this.load.image(
            "bg",
            "src/scenes/image/backgrounds/png/bg03/Layers/Middle_Decor.png"
        );
        this.load.image(
            "sk",
            "src/scenes/image/backgrounds/png/bg03/Layers/Sky.png"
        );
        this.load.image(
            "gl",
            "src/scenes/image/backgrounds/png/bg03/Layers/Ground.png"
        );
        this.load.image(
            "fg",
            "src/scenes/image/backgrounds/png/bg03/Layers/Foreground.png"
        );
        this.load.spritesheet(
            "slime",
            "src/scenes/image/Slimes/slimeIdle2/SlimeBlue2.png",
            {
                frameWidth: 80,
                frameHeight: 54,
            }
        );
        this.load.image(
            "as",
            "src/scenes/image/assests/png/Objects/ArrowSign.png"
        );
        this.load.image("ct", "src/scenes/image/assests/png/Objects/Crate.png");
        //spike
        this.load.image(
            "spk",
            "src/scenes/image/assests/png/Objects/spike.png"
        );
        this.load.image(
            "spkd",
            "src/scenes/image/assests/png/Objects/spikeupsidedown.png"
        );
        this.load.image(
            "bird",
            "src/scenes/image/assests/png/Objects/bird.png"
        );
        this.load.image("ct", "src/scenes/image/assests/png/Objects/Crate.png");
    }

    create() {
        //prop
        ArrowSign = this.physics.add.image(1210, 650, "as").setDepth(0.94);
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
            .setSize(18, 17)
            .setOffset(25, 16);
        this.anims.create({
            key: "slimeAni",
            frames: this.anims.generateFrameNumbers("slime", {
                start: 1,
                end: 7,
            }),
            duration: 700,
            repeat: -1,
        });
        //crate
        crate = this.physics.add
            .image(220, 450, "ct")
            .setDepth(0.94)
            .setSize(105, 100)
            .setOffset(0, 0);
        crate2 = this.physics.add
            .image(530, 450, "ct")
            .setDepth(0.94)
            .setSize(105, 100)
            .setOffset(0, 0);
        crate3 = this.physics.add
            .image(840, 450, "ct")
            .setDepth(0.94)
            .setSize(105, 100)
            .setOffset(0, 0);
        crate4 = this.physics.add
            .image(840, 20, "ct")
            .setDepth(0.94)
            .setSize(105, 100)
            .setOffset(0, 0);
        crate5 = this.physics.add
            .image(530, 20, "ct")
            .setDepth(0.94)
            .setSize(105, 100)
            .setOffset(0, 0);
        crate6 = this.physics.add
            .image(220, 20, "ct")
            .setDepth(0.94)
            .setSize(105, 100)
            .setOffset(0, 0);

        //spike
        spike = this.physics.add
            .image(230, 680, "spk")
            .setDepth(0.97)
            .setScale(0.7)
            .setSize(100, 100)
            .setOffset(105, 115);
        spike2 = this.physics.add
            .image(230, 350, "spk")
            .setDepth(0.97)
            .setScale(0.7)
            .setSize(100, 100)
            .setOffset(105, 115);
        spike3 = this.physics.add
            .image(530, 680, "spk")
            .setDepth(0.97)
            .setScale(0.7)
            .setSize(100, 100)
            .setOffset(105, 115);
        spike4 = this.physics.add
            .image(540, 350, "spk")
            .setDepth(0.97)
            .setScale(0.7)
            .setSize(100, 100)
            .setOffset(105, 115);
        spike5 = this.physics.add
            .image(840, 680, "spk")
            .setDepth(0.97)
            .setScale(0.7)
            .setSize(100, 100)
            .setOffset(105, 115);
        spike6 = this.physics.add
            .image(845, 350, "spk")
            .setDepth(0.97)
            .setScale(0.7)
            .setSize(100, 100)
            .setOffset(105, 115);
        spikeDown = this.physics.add
            .image(830, 120, "spkd")
            .setDepth(0.97)
            .setScale(0.7)
            .setSize(100, 100)
            .setOffset(135, 100);
        spikeDown2 = this.physics.add
            .image(525, 120, "spkd")
            .setDepth(0.97)
            .setScale(0.7)
            .setSize(100, 100)
            .setOffset(135, 100);
        spikeDown3 = this.physics.add
            .image(210, 120, "spkd")
            .setDepth(0.97)
            .setScale(0.7)
            .setSize(100, 100)
            .setOffset(135, 105);
        cursors = this.input.keyboard.createCursorKeys();
        slime.setGravityY(2000);
        slime.setBounce(0.1);
        slime.setCollideWorldBounds(true);
        //bird
        birdGroup = this.physics.add.group();
        this.physics.add.collider(slime, spike, () => {
            this.scene.start("DeadScene");
        });
        this.physics.add.collider(slime, spike2, () => {
            this.scene.start("DeadScene");
        });
        this.physics.add.collider(slime, spike3, () => {
            this.scene.start("DeadScene");
        });
        this.physics.add.collider(slime, spike4, () => {
            this.scene.start("DeadScene");
        });
        this.physics.add.collider(slime, spike5, () => {
            this.scene.start("DeadScene");
        });
        this.physics.add.collider(slime, spike6, () => {
            this.scene.start("DeadScene");
        });
        this.physics.add.collider(slime, spikeDown, () => {
            this.scene.start("DeadScene");
        });
        this.physics.add.collider(slime, spikeDown2, () => {
            this.scene.start("DeadScene");
        });
        this.physics.add.collider(slime, spikeDown3, () => {
            this.scene.start("DeadScene");
        });

        //crate collide
        crate.setCollideWorldBounds(true);
        this.physics.add.collider(slime, crate);
        crate.setImmovable();
        crate2.setCollideWorldBounds(true);
        this.physics.add.collider(slime, crate2);
        crate2.setImmovable();
        crate3.setCollideWorldBounds(true);
        this.physics.add.collider(slime, crate3);
        crate3.setImmovable();
        this.physics.add.collider(slime, ArrowSign, () => {
            this.scene.start("MainMenu");
        });
        event = this.time.addEvent({
            delay: 1500,
            callback: function () {
                bird = this.physics.add.image(
                    1300,
                    Math.floor(Math.random() * 900) - 300,
                    "bird"
                );
                bird.setScale(0.25);
                bird.setDepth(1);
                bird.setSize(450, 280);
                bird.setOffset(50, 60);
                birdGroup.add(bird);
                birdGroup.setVelocityX(-200);
            },
            callbackScope: this,
            loop: true,
        });
        this.physics.add.collider(slime, birdGroup, () => {
            this.scene.start("DeadScene2");
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
        if (cursors.up.isDown) {
            slime.setVelocityY(-330);
        }
        slime.anims.play("slimeAni", true);
        for (let i = 0; i < birdGroup.getChildren().length; i++) {
            if (birdGroup.getChildren()[i].x < 0) {
                birdGroup.getChildren()[i].destroy();
            }
        }
    }
}
export default GameScene4;
