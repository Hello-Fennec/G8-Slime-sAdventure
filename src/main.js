import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import howtoplay from './scenes/howtoplay';
import GameScene2 from './scenes/GameScene2';
import GameScene3 from './scenes/GameScene3';
import GameScene4 from './scenes/GameScene4';
import DeadScene from './scenes/DeadScene';
import DeadScene1 from './scenes/DeadScene1';
import TheEnd from './scenes/TheEnd';



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
        //MainMenu,
        //DeadScene,
        //DeadScene1,
        //howtoplay,
        //GameScene,        
        //GameScene2,        
        //GameScene3,        
        GameScene4,
        TheEnd
       
    ],
    
    
};

const game = new Phaser.Game(config);