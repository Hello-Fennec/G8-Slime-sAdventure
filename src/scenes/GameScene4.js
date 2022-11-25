import Phaser from "phaser";
let background;
let slimeblue;
let platform;

class GameScene4 extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene4'
        });
    }

    preload() {
       this.load.image('bg','./src/scenes/image/backgrounds/png/bg04/bgforest04.png')
       this.load.spritesheet('slime','src/scenes/image/Slimes/slimeIdle2/SlimeBlue2.png',    
            {frameWidth: 80,frameHeight: 54, }
        );
        this.load.image('pf','./src/scenes/image/assests/png/Tiles/Tile2.png')

    }

    create() {
       //background
       background = this.add.image(650, 300, 'bg').setDepth(0.8).setScale(0.8);

       //platform
       platform = this.add.image(60,650, 'pf').setDepth(0.9).setScale(1);
        
    

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

      
      
      
    }

    update(delta, time) {
        slime.anims.play('slimeAni', true);

        if (cursors.left.isDown) {
            slime.setVelocityX(-160);
        } else if (cursors.right.isDown) {
            slime.setVelocityX(160);
        } else {
            slime.setVelocityX(0);
        }
        slime.anims.play('slimeAni', true);
        if (cursors.up.isDown) {
            slime.setVelocityY(-330);
        }
    }
}
export default GameScene4;
