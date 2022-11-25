import Phaser from "phaser";
let BackgroundHow;
let SignBack;
let Woodbanner;
let BackButton;
let Left;
let Right;
let Up;


class howtoplay extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'howtoplay'
        });
    }

    preload() {
        this.load.image('bgHow','./src/scenes/image/Mainmenu/backGround.jpg')
        this.load.image('signback','./src/scenes/image/assests/png/Objects/ArrowSignLeft.png')
        this.load.image('back','./src/scenes/image/Mainmenu/back.png')
        this.load.image('bannerwood','./src/scenes/image/Mainmenu/9.png')
        this.load.image()
        

    }

    create() {
        BackgroundHow = this.add.image(630,360, 'bgHow').setDepth(0.1)
        SignBack = this.add.image(150,600, 'signback').setScale(2.5).setDepth(0.12)

        Woodbanner = this.add.image(250,120, 'bannerwood').setScale(0.2).setDepth(0.12)
        
        //button
        BackButton = this.add.image(170,570,'back').setScale(0.18).setDepth(0.13);
        BackButton.setInteractive();
        BackButton.on('pointerup',()=>{
            this.scene.start('MainMenu');
        })
        BackButton.on('pointerover',()=>{
            BackButton.setScale(0.22);
        })
        BackButton.on('pointerout',()=>{
            BackButton.setScale(0.18);
        })
    }

    update(delta, time) {
        
    }
}
export default howtoplay;
