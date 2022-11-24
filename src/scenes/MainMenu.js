import Phaser from "phaser";
let bg;
let banner1;
let banner2;
let Frame;
let Sign;
let Obj;
let Slime;
let playButton;



class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('bg','./src/scenes/image/Mainmenu/backGround.jpg')
        this.load.image('banner1','./src/scenes/image/Mainmenu/1.png')
        this.load.image('banner2','./src/scenes/image/Mainmenu/2.png')
        this.load.image('frame','./src/scenes/image/Mainmenu/11.png')
        this.load.image('banner','/src/scenes/image/Mainmenu/sign.png')
        this.load.image('obj1','./src/scenes/image/assests/png/Objects/Bush1.png')
        this.load.image('play','./')
        this.load.spritesheet('slime','./src/scenes/image/Slimes/slimeMove/Bluemove.png',{frameWidth: 80, frameHeight: 54})
        
        

    }

    create() {
        //backgrounds
        bg = this.add.image(630, 360, 'bg').setDepth(0.1)
        banner1 = this.add.image(250,200, 'banner1').setScale(0.3).setDepth(0.2)
        banner2 = this.add.image(305,290, 'banner2').setScale(0.3).setDepth(0.2)
        Frame = this.add.image(305, 250, 'frame').setScale(0.29).setDepth(0.15)
        Sign = this.add.image(950, 450,'banner').setScale(0.29).setDepth(0.2)
        Obj = this.add.image(950, 600,'obj1').setScale(1).setDepth(0.2)


         

        //character
        Slime = this.physics.add.sprite(300,650,'slime')
        .setScale(7)
        .setSize(25,20)
        .setOffset(23,15)
        .setDepth(1)
        this.anims.create({
           key: 'slimeAni',
           frames: this.anims.generateFrameNumbers('slime', {
            start: 0,
            end: 6
           }),
           duration: 600 ,
           repeat: -1
        })


        //button
        playButton = this.add.image(900,250,'play').setScale(0.3).setDepth(0.2);
        playButton.setInteractive();
        playButton.on('pointerup',()=>{
            this.scene.start('GameScene');
        })
        playButton.on('pointerover',()=>{
            playButton.setScale(0.5);
        })
        playButton.on('pointerout',()=>{
            playButton.setScale(0.3);
        })



    }

    update(delta, time) {
        Slime.anims.play('slimeAni', true);
    }
}
export default MainMenu;
