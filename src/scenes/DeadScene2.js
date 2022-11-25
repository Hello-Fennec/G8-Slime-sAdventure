import Phaser from "phaser";

let restartButton;
let retryButton;
let Background;
let BannerSign;

class DeadScene2 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "DeadScene2",
        });
    }

    preload() {
        this.load.image('Bg','/src/scenes/image/assests/png/bg2.png')
        this.load.image('restartButton','./src/scenes/image/Mainmenu/restart.png')
        this.load.image('retryButton','./src/scenes/image/Mainmenu/retry.png')
        this.load.image('bannersign','./src/scenes/image/Mainmenu/8.png')

    }

    create() {

        Background = this.add.image(630,360,'Bg').setDepth(0.8)

        BannerSign = this.physics.add.staticGroup();
        BannerSign.create(300, 550, 'bannersign').setScale(0.3).setDepth(0.91)
        BannerSign.create(980, 550, 'bannersign').setScale(0.3).setDepth(0.91)
        
        //restart
        restartButton = this.add
            .image(300, 550, "restartButton")
            .setScale(0.2)
            .setDepth(0.92);
        restartButton.setInteractive();
        restartButton.on("pointerdown", () => {
            this.scene.start("MainMenu");
        });
        restartButton.on('pointerover',()=>{
            restartButton.setScale(0.25);
        })
        restartButton.on('pointerout',()=>{
            restartButton.setScale(0.2);
        })

        //retry
        retryButton = this.add
            .image(980, 550, "retryButton")
            .setScale(0.2)
            .setDepth(0.92);
        retryButton.setInteractive();
        retryButton.on("pointerdown", () => {
            this.scene.start("GameScene4");
        });
        retryButton.on('pointerover',()=>{
            retryButton.setScale(0.25);
        })
        retryButton.on('pointerout',()=>{
            retryButton.setScale(0.2);
        })

        
    }

    update(delta, time) {}
}
export default DeadScene2;