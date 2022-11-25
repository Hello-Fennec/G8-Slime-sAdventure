import "phaser";
import Phaser from "phaser";
import GameScene from "./scenes/GameScene";
import GameScene2 from "./scenes/GameScene2";
import GameScene3 from "./scenes/GameScene3";
import MainMenu from "./scenes/Mainmenu";
import Instruction from "./scenes/Instruction";
import DeadScene from "./scenes/DeadScene";
import GameScene4 from "./scenes/GameScene4";
const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: "content",
    width: 1260,
    height: 720,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        },
    },
    scene: [
        GameScene4,
        MainMenu,
        GameScene3,
        DeadScene,
        Instruction,
        GameScene,
        GameScene2,
    ],
};

const game = new Phaser.Game(config);
