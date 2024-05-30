import { Color, Font, Label, Scene, Vector } from "excalibur";
import { Resources } from "./resources";

export class GameOver extends Scene {

    onActivate() {
        this.playBackgroundMusic();

        this.engine.backgroundColor = Color.Black;

        this.clear();

        this.gameOverLabel = new Label({
            text: 'Game Over',
            pos: new Vector(400, 100),
            color: Color.Red,
            font: new Font({
                size: 70,
                bold: true
            }),
        });
        this.add(this.gameOverLabel);

        const totalCoins = localStorage.getItem("totalCoins");

        this.totalCoinsLabel = new Label({
            text: `Total Coins: ${totalCoins || 0}`,
            pos: new Vector(480, 250),
            color: Color.White,
            font: new Font({ size: 25 }),
        });
        this.add(this.totalCoinsLabel);

        let coins = localStorage.getItem("coins");
        coins = coins ? coins : "0";

        this.coinsLabel = new Label({
            text: `Coins Collected: ${coins}`,
            pos: new Vector(480, 300),
            color: Color.White,
            font: new Font({ size: 25 }),
        });
        this.add(this.coinsLabel);

        const highScore = localStorage.getItem("highScore");
        const currentScore = parseInt(coins);

        if (!highScore || (currentScore && currentScore > parseInt(highScore))) {
            localStorage.setItem("highScore", currentScore.toString());
        }

        this.highScoreLabel = new Label({
            text: `High Score: ${localStorage.getItem("highScore") || 0}`,
            pos: new Vector(480, 350),
            color: Color.White,
            font: new Font({ size: 25 }),
        });
        this.add(this.highScoreLabel);

        this.restartLabel = new Label({
            text: 'Restart',
            pos: new Vector(420, 450),
            color: Color.White,
            font: new Font({
                size: 40,
                bold: true
            }),
        });

        this.restartLabel.on('pointerup', () => {
            localStorage.setItem("coins", "0");
            this.engine.goToScene('level1');
        });
        this.add(this.restartLabel);

        this.goToStartScreen = new Label({
            text: 'Start Screen',
            pos: new Vector(610, 460),
            color: Color.White,
            font: new Font({
                size: 25,
                bold: true
            }),
        });

        this.goToStartScreen.on('pointerup', () => {
            this.engine.goToScene('start');
        });
        this.add(this.goToStartScreen);
    }

    playBackgroundMusic() {
        Resources.ThemeSong.stop();
        Resources.ThemeSong2.stop();
        Resources.gameOverThemeSong.play();
    }

}
