import Phaser from "phaser";

let restartButton;
let retryButton;
let Background;

class DeadScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "DeadScene",
        });
    }

    preload() {
        this.load.image('Bg','/src/scenes/image/assests/png/bg2.png')
        this.load.image('restartButton','./src/scenes/image/Mainmenu/restart.png')
        this.load.image('retryButton','./')

    }

    create() {

        Background = this.add.image(630,360,'Bg').setDepth(0.8)
        
        restartButton = this.add
            .image(250, 550, "restartButton")
            .setScale(0.5)
            .setDepth(0.92);
        restartButton.setInteractive();
        restartButton.on("pointerdown", () => {
            this.scene.start("MainMenu");
        });
        restartButton.on('pointerover',()=>{
            restartButton.setScale(0.6);
        })
        restartButton.on('pointerout',()=>{
            restartButton.setScale(0.3);
        })

        retryButton = this.add
            .image(980, 550, "retryButton")
            .setScale(0.5)
            .setDepth(0.92);
        retryButton.setInteractive();
        retryButton.on("pointerdown", () => {
            this.scene.start("GameScene2");
        });
        retryButton.on('pointerover',()=>{
            retryButton.setScale(0.6);
        })
        retryButton.on('pointerout',()=>{
            retryButton.setScale(0.3);
        })

        
    }

    update(delta, time) {}
}
export default DeadScene;