import Phaser from "phaser";
let background;
let textend;
let playbutton;


class Resume extends Phaser.Scene {
    constructor(test) {
        super({
            key: "Resume",
        });
    }

    preload() {
        this.load.image('bgend','src/scenes/image/Mainmenu/backGround.jpg')
        this.load.image('textEnd','src/scenes/image/Mainmenu/congrats.png')
        this.load.image('playagain','src/scenes/image/Mainmenu/resume.png')

    }

    create() {

        this.cameras.main.fadeIn(500);

        background = this.add.image(630, 360, 'bgend').setDepth(0.1)
        textend = this.add.image(630, 250, 'textEnd').setScale(0.5).setDepth(0.3)

        playbutton = this.add.image(630,500, 'playagain').setScale(0.4).setDepth(0.3);
        playbutton.setInteractive();
        playbutton.on('pointerup',()=>{
            this.scene.start('MainMenu');
        })
        playbutton.on('pointerover',()=>{
            playbutton.setScale(0.6);
        })
        playbutton.on('pointerout',()=>{
            playbutton.setScale(0.4);
        })

    

    }

    update(delta, time) {

    }
}
export default Resume;