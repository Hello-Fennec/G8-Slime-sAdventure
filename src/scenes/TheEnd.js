import Phaser from "phaser";
let background;


class TheEnd extends Phaser.Scene {
    constructor(test) {
        super({
            key: "TheEnd",
        });
    }

    preload() {
        this.load.image('bg','src/scenes/image/Mainmenu/backGround.jpg')
        this.load.image('textEnd','')

    }

    create() {
        background = this.add.image(630, 360, 'bg').setDepth(0.1)

    }

    update(delta, time) {

    }
}
export default TheEnd;