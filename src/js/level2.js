import { Vector, Label, Font, Color } from "excalibur";
import { Resources } from './resources.js';
import { Chicken } from './chicken';
import { Coin } from './coin';
import { Background2 } from "./background2.js";
import { Level1 } from "./level1.js";
import { Rocket } from "./rocket.js";

export class Level2 extends Level1 {

    addCoin() {
        this.coins++;
        localStorage.setItem('coins', JSON.stringify(this.coins));
        this.scoreLabel.text = `Coins: ${this.coins}`;
    }

    addTotalCoins() {
        this.totalCoins++;
        localStorage.setItem('totalCoins', JSON.stringify(this.totalCoins));
        this.totalScoreLabel.text = `Total Coins: ${this.totalCoins}`;
    }

    setupScene(engine) {
        const storedTotalCoins = localStorage.getItem('totalCoins');
        if (storedTotalCoins !== null) {
            this.totalCoins = parseInt(storedTotalCoins, 10);
        }

        const storedCoins = localStorage.getItem('coins');
        if (storedCoins !== null) {
            this.coins = parseInt(storedCoins, 10);
        }

        const background2 = new Background2();
        background2.scale = new Vector(2, 2);
        this.add(background2);

        const coin = new Coin(this);
        coin.scale = new Vector(.3, .3);
        this.add(coin);

        const chicken = new Chicken();
        chicken.scale = new Vector(1, 1);
        this.add(chicken);

        const rocket1 = new Rocket();
        rocket1.scale = new Vector(0.7, 0.7);
        rocket1.pos = new Vector(200, 50);
        this.add(rocket1);

        const rocket2 = new Rocket();
        rocket2.scale = new Vector(0.7, 0.7);
        rocket2.pos = new Vector(1300, 700);
        this.add(rocket2);

        this.playBackgroundMusic();

        this.scoreLabel = new Label({
            text: `Coins: ${this.coins}`,
            pos: new Vector(50, 60),
            font: new Font({ size: 25 }),
            color: Color.White,
        });
        this.add(this.scoreLabel);

        this.totalScoreLabel = new Label({
            text: `Total Coins: ${this.totalCoins}`,
            pos: new Vector(50, 25),
            font: new Font({ size: 25 }),
            color: Color.White,
        });
        this.add(this.totalScoreLabel);
    }

    playBackgroundMusic() {
        Resources.ThemeSong2.stop();
        Resources.gameOverThemeSong.stop();
        Resources.ThemeSong2.loop = true;
        Resources.ThemeSong2.play();
    }
}
