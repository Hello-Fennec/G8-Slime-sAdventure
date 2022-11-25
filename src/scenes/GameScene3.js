import Phaser from "phaser";
let background;
let slime;
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
        this.load.image('Bg02','src/scenes/image/backgrounds/png/bg02/bgforest02.png')
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
        this.cameras.main.fadeIn(500);
        //prop
        background = this.add
            .image(600, 350, 'Bg02')
            .setDepth(0.91)
            .setScale(0.7);
        
        //slime
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

        //bullet
        bulletGroup = this.physics.add.group();
        event = this.time.addEvent({
            delay: 1000,
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

        //arrow for next Scene
        ArrowSign = this.physics.add.image(1210, 680, "as").setDepth(0.94);

        //moving
        cursors = this.input.keyboard.createCursorKeys();
        slime.setGravityY(2000);
        slime.setBounce(0.1);
        slime.setCollideWorldBounds(true);
        this.physics.add.collider(slime, bulletGroup, () => {
            this.scene.start("DeadScene1");
        });
        this.physics.add.collider(slime, ArrowSign, () => {
            this.scene.start("GameScene4");
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