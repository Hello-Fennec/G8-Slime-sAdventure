import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import howtoplay from './scenes/howtoplay';


const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1260,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [
        MainMenu,
        howtoplay,
        GameScene
       
    ],
    
    
};

const game = new Phaser.Game(config);