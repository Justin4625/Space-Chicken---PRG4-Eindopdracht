import { Vector, Scene, Label, Font, } from "excalibur";
import { Resources } from './resources.js';
import { Chicken } from './chicken';
import { Background } from './background';
import { Cactus } from './cactus';
import { Coin } from './coin';

export class Level1 extends Scene {
    coins = 0;
    totalCoins = 0;
    scoreLabel;
    totalScoreLabel;

    addCoin() {
        this.coins++;
        localStorage.setItem('coins', JSON.stringify(this.coins));
        this.scoreLabel.text = `Coins: ${this.coins}`;

        if (this.coins >= 30) {
            Resources.ThemeSong.stop();
            this.engine.goToScene('level2');
        }
    }

    addTotalCoins() {
        this.totalCoins++;
        localStorage.setItem('totalCoins', JSON.stringify(this.totalCoins));
        this.totalScoreLabel.text = `Total Coins: ${this.totalCoins}`;
    }

    onInitialize(engine) {
        console.log("start de game!");

        this.setupScene(engine);
    }

    setupScene(engine) {
        const storedTotalCoins = localStorage.getItem('totalCoins');
        if (storedTotalCoins !== null) {
            this.totalCoins = parseInt(storedTotalCoins, 10);
        }

        localStorage.setItem("coins", "0");

        const background = new Background();
        background.scale = new Vector(2, 2);
        this.add(background);

        const cactus = new Cactus();
        cactus.scale = new Vector(.9, .9);
        this.add(cactus);

        const coin = new Coin(this);
        coin.scale = new Vector(.3, .3);
        this.add(coin);

        const chicken = new Chicken();
        chicken.scale = new Vector(1, 1);
        this.add(chicken);

        this.playBackgroundMusic();

        this.scoreLabel = new Label({
            text: 'Coins: 0',
            pos: new Vector(50, 60),
            font: new Font({ size: 25 }),
        });
        this.add(this.scoreLabel);

        this.totalScoreLabel = new Label({
            text: `Total Coins: ${this.totalCoins}`,
            pos: new Vector(50, 25),
            font: new Font({ size: 25 }),
        });
        this.add(this.totalScoreLabel);
    }

    playBackgroundMusic() {
        Resources.StartMusic.stop();
        Resources.ThemeSong.stop();
        Resources.gameOverThemeSong.stop();
        Resources.ThemeSong.loop = true;
        Resources.ThemeSong.play();
    }

    onActivate() {
        this.coins = 0;
        this.clear();
        this.setupScene(this.engine);
    }
}