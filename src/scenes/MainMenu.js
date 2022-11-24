import Phaser from "phaser";
let bg1;
let bg2;
let Slime;
let playButton;



class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('bgmenu1','./src/scenes/image/backgrounds/png/bg04/Layers/Middle_Decor.png');
        this.load.image('bgmenu2','./src/scenes/image/backgrounds/png/bg01/Layers/Ground.png');
        this.load.spritesheet('slime','./src/scenes/image/Slimes/slimeMove/Bluemove.png',{frameWidth: 80, frameHeight: 54});
        this.load.image('play','./src/scenes/image/Mainmenu/playButton.png');
        

    }

    create() {
        //backgrounds
        bg1 = this.add.image(630, 360, 'bgmenu1').setScale(0.7).setDepth(1);
        bg2 = this.add.image(300, 200, 'bgmenu2').setDepth(2);
       

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


        //button
        playButton = this.add.image(900,250,'play').setScale(0.3).setDepth(3);
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
