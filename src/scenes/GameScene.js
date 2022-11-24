import Phaser from "phaser";
let background;
let middledecor;
let bgdecor;
let grass;
let sky;
let keyW;
let keyA;
let keyD;
let keyS;
let slime;
let platform;
let platform1;
let platform2;
let platform3;
let platform4;
let platform5;
let platform6;

let cursors;
let ArrowSign;
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene",
        });
    }

    preload() {

        this.load.image("bg","src/scenes/image/backgrounds/png/bg01/Layers/Foreground.png");       
        this.load.image("middledecor", "src/scenes/image/backgrounds/png/bg01/Layers/Middle_Decor.png");
        this.load.image("bgdecor", "src/scenes/image/backgrounds/png/bg01/Layers/BG_Decor.png");
        this.load.image("gl","src/scenes/image/backgrounds/png/bg01/Layers/Ground.png");
        this.load.image("sky", "src/scenes/image/backgrounds/png/bg01/Layers/Sky.png");    
        this.load.spritesheet("slime","src/scenes/image/Slimes/slimeIdle2/SlimeBlue2.png",    
            {frameWidth: 80,frameHeight: 54, }
        );
        this.load.image("as", "src/scenes/image/assests/png/Objects/ArrowSign.png" );   
        this.load.image("pf", "src/scenes/image/assests/png/Tiles/Tile16.png");   
        this.load.image("pfm", "src/scenes/image/assests/png/Tiles/Tile15.png");
        this.load.image("pfr", "src/scenes/image/assests/png/Tiles/Tile14.png");       
             
    }

    create() {

        //Prop
        background = this.add
            .image(650, 300, "bg")
            .setDepth(0.91)
            .setScale(0.8);
        middledecor = this.add
            .image(600, 400, "middledecor")
            .setDepth(0.92)
            .setScale(1);
        bgdecor = this.add.image(600, 400, "bgdecor").setDepth(0.9).setScale(1);
        grass = this.add.image(300, 250, "gl").setDepth(0.97);

        platform = this.physics.add
            .image(700, 400, "pf")
            .setDepth(0.94)
            .setSize(120, 100)
            .setOffset(0, 0);
        platform1 = this.physics.add
            .image(900, 300, "pfr")
            .setDepth(0.94)
            .setSize(120, 100)
            .setOffset(0, 0);
        platform2 = this.physics.add
            .image(1000, 300, "pf")
            .setDepth(0.94)
            .setSize(120, 100)
            .setOffset(0, 0);
        platform3 = this.physics.add
            .image(1200, 200, "pfr")
            .setDepth(0.94)
            .setSize(120, 100)
            .setOffset(0, 0);
        platform4 = this.physics.add
            .image(600, 400, "pfr")
            .setDepth(0.94)
            .setSize(120, 100)
            .setOffset(0, 0);
        platform5 = this.physics.add
            .image(400, 500, "pf")
            .setDepth(0.94)
            .setSize(120, 100)
            .setOffset(0, 0);
        platform6 = this.physics.add
            .image(300, 500, "pfr")
            .setDepth(0.94)
            .setSize(120, 100)
            .setOffset(0, 0);
            
        ArrowSign = this.physics.add.image(1210, 95, "as").setDepth(0.94);

        sky = this.add.image(300, 250, "sky").setDepth(0.8);

        //key
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        //SLime
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

        cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(slime, platform);
        this.physics.add.collider(slime, platform1);
        this.physics.add.collider(slime, platform2);
        this.physics.add.collider(slime, platform3);
        this.physics.add.collider(slime, platform4);
        this.physics.add.collider(slime, platform5);
        this.physics.add.collider(slime, platform6);
        this.physics.add.collider(slime, ArrowSign, () => {
            this.scene.start("GameScene2");
        });
        
        //Gravity slime
        slime.setGravityY(2000);
        slime.setBounce(0.1);
        slime.setCollideWorldBounds(true);
        platform.setCollideWorldBounds(true);
        platform.setImmovable();
        platform1.setCollideWorldBounds(true);
        platform1.setImmovable();
        platform2.setCollideWorldBounds(true);
        platform2.setImmovable();
        platform3.setCollideWorldBounds(true);
        platform3.setImmovable();
        platform4.setCollideWorldBounds(true);
        platform4.setImmovable();
        platform5.setCollideWorldBounds(true);
        platform5.setImmovable();
        platform6.setCollideWorldBounds(true);
        platform6.setImmovable();

        //Key
    }

    update(delta, time) {
        // if (keyW.isDown) {
        //     slime.setVelocityY(-400);
        // } else if (keyA.isDown) {
        //     slime.setVelocityX(-300);
        // } else if (keyD.isDown) {
        //     slime.setVelocityX(300);
        // } else {
        //     slime.setVelocityY(0).setVelocityX(0);
        // }
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
export default GameScene;
