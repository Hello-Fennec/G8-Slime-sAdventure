import Phaser from "phaser";
let backgroundHow;


class howtoplay extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'howtoplay'
        });
    }

    preload() {
        this.load.image('bgHow','./src/scenes/image/Mainmenu/backGround.jpg')

    }

    create() {
        backgroundHow = this.add.image(630, 360, 'bgHow').setDepth(0.1)
    }

    update(delta, time) {
        
    }
}
export default howtoplay;
