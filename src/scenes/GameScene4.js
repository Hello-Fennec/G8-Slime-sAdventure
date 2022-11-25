import Phaser from "phaser";
let slimeblue;
let arrowSign;

class GameScene4 extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene4'
        });
    }

    preload() {
        this.load.spritesheet( "slime", "src/scenes/image/Slimes/slimeIdle2/SlimeBlue2.png",
            {frameWidth: 80,frameHeight: 54, }        
         ); 
        this.load.image("arrow","src/scenes/image/assests/png/Objects/ArrowSign.png" );      

    }

    create() {


       //slime
       slimeblue = this.physics.add
            .sprite(100, 680, 'slime')
            .setScale(4)
            .setDepth(0.96)
            .setSize(20, 20)
            .setOffset(25, 13);
        this.anims.create({
            key: 'slimeAni',
            frames: this.anims.generateFrameNumbers('slime', {
                start: 1,
                end: 7,
            }),
            duration: 700,
            repeat: -1,
        });

        
        //moving
        cursors = this.input.keyboard.createCursorKeys();

        //object
        //arrowSign = this.add.image()


        cursors = this.input.keyboard.createCursorKeys();
        slime.setGravityY(2000);
        slime.setBounce(0.1);
        slime.setCollideWorldBounds(true);
        this.physics.add.collider(slime, arrowSign, () => {
            this.scene.start("GameScene4");
        });
        this.physics.add.collider(slimeblue, arrowSign, () => {
            this.scene.start("TheEnd");
        });

      
    }

    update(delta, time) {
        slimeblue.anims.play('slimeAni', true);

        if (cursors.left.isDown) {
            slimeblue.setVelocityX(-160);
        } else if (cursors.right.isDown) {
            slimeblue.setVelocityX(160);
        } else {
            slimeblue.setVelocityX(0);
        }
        slimeblue.anims.play('slimeAni', true);
        if (cursors.up.isDown) {
            slimeblue.setVelocityY(-330);
        }
    }
}
export default GameScene4;
