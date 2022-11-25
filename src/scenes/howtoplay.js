import Phaser from "phaser";
let BackgroundHow;
let SignBack;
let Woodbanner;
let BackButton;
let Left;
let Right;
let Up;
let tutorialLeft;
let tutorialRight;
let tutorialUp


class howtoplay extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'howtoplay'
        });
    }

    preload() {
        this.load.image('bgHow','src/scenes/image/Mainmenu/backGround.jpg')
        this.load.image('signback','src/scenes/image/assests/png/Objects/ArrowSignLeft.png')
        this.load.image('back','src/scenes/image/Mainmenu/back.png')
        this.load.image('bannerwood','src/scenes/image/Mainmenu/9.png')
        this.load.image('left','src/scenes/image/Mainmenu/left.png')
        this.load.image('right','src/scenes/image/Mainmenu/right.png')
        this.load.image('up','src/scenes/image/Mainmenu/up.png')
        this.load.image('tutorialL','src/scenes/image/Mainmenu/tutorialLeft.png')
        this.load.image('tutorialR','src/scenes/image/Mainmenu/tutorialRight.png')
        this.load.image('tutorialU','src/scenes/image/Mainmenu/tutorialUp.png')

        

    }

    create() {

        this.cameras.main.fadeIn(500);

        BackgroundHow = this.add.image(630,360, 'bgHow').setDepth(0.1)
        SignBack = this.add.image(150,600, 'signback').setScale(2.5).setDepth(0.12)

        Woodbanner = this.physics.add.staticGroup();
        Woodbanner.create(250,130, 'bannerwood').setScale(0.2).setDepth(0.12)
        Woodbanner.create(630,130, 'bannerwood').setScale(0.2).setDepth(0.12)
        Woodbanner.create(1010,130, 'bannerwood').setScale(0.2).setDepth(0.12)


        Left = this.add.image(250,130, 'left').setScale(0.1).setDepth(0.13)
        Right =  this.add.image(630,130, 'right').setScale(0.1).setDepth(0.13)
        Up =  this.add.image(1010,130, 'up').setScale(0.09).setDepth(0.13)

        tutorialLeft = this.add.image(250,200, 'tutorialL').setScale(0.3).setDepth(0.13)
        tutorialRight = this.add.image(630,200, 'tutorialR').setScale(0.3).setDepth(0.13)
        tutorialUp = this.add.image(1010,200, 'tutorialU').setScale(0.3).setDepth(0.13)

       

        
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
