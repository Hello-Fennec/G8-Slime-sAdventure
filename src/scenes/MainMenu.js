import Phaser from "phaser";
let bgmenu1 ;
let bgmenu2 ;



class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('bgmenu1','./src/scenes/image/backgrounds/png/bg04/Layers/Sky.png')
        this.load.image('bgmenu2','./src/scenes/image/backgrounds/png/bg01/Layers/Ground.png')

        this.load.spritesheet('slime','./src/scenes/image/Slimes/slimeMove/Bluemove.png')


    }

    create() {
        //backgrounds
        bgmenu1 = this.add.image(630, 360, 'bgmenu1').setDepth(1);
        bgmenu2 = this.add.image(630, 360, 'bgmenu2').setDepth(2); 



    }

    update(delta, time) {
        
    }
}
export default MainMenu;
