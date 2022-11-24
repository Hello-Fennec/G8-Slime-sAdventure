import Phaser from "phaser";
let bgmenu1 ;
let Slime;



class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('bgmenu1','./src/scenes/image/backgrounds/png/bg04/Layers/Sky.png');
        

        this.load.spritesheet('slime','./src/scenes/image/Slimes/slimeMove/Bluemove.png',{frameWidth: 80, frameHeight: 54});


    }

    create() {
        //backgrounds
        bgmenu1 = this.add.image(630, 360, 'bgmenu1').setDepth(1);
       

        //character
        Slime = this.physics.add.sprite(150,650,'slime')
        .setScale(3)
        .setSize(25,20)
        .setOffset(23,15)
        .setDepth(5)
        this.anims.create({
           key: 'slimeAni',
           frames: this.anims.generateFrameNumbers('slime', {
            start: 0,
            end: 6
           }),
           duration: 600 ,
           repeat: -1
        })



    }

    update(delta, time) {
        Slime.anims.play('slimeAni', true);
    }
}
export default MainMenu;
