import Phaser from "phaser";
let BackgroundHow;
let SignBack;


class howtoplay extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'howtoplay'
        });
    }

    preload() {
        this.load.image('bgHow','./src/scenes/image/Mainmenu/backGround.jpg')
        this.load.image('signback','./src/scenes/image/assests/png/Objects/ArrowSignLeft.png')

    }

    create() {
        BackgroundHow = this.add.image(630, 360, 'bgHow').setDepth(0.1)
        SignBack = this.add.image(150, 600, 'signback').setScale(2.5).setDepth(0.12)
    }

    update(delta, time) {
        
    }
}
export default howtoplay;
