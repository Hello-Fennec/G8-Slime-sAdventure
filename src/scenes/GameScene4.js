import Phaser from "phaser";

class GameScene4 extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene4'
        });
    }

    preload() {
        this.load.image('bgHow','./src/scenes/image/Mainmenu/backGround.jpg')
        this.load.image('signback','./src/scenes/image/assests/png/Objects/ArrowSignLeft.png')
        this.load.image('back','./src/scenes/image/Mainmenu/back.png')

    }

    create() {
        BackgroundHow = this.add.image(630, 360, 'bgHow').setDepth(0.1)
        SignBack = this.add.image(150, 600, 'signback').setScale(2.5).setDepth(0.12)
        
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
export default GameScene4;