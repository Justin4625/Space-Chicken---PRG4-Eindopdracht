import { Color, Font, Label, Scene, Vector, Actor, Sprite } from "excalibur";
import { Resources } from "./resources";

export class Start extends Scene {

    onActivate() {
        this.playBackgroundMusic();

        this.engine.backgroundColor = Color.Black;

        const startScreenImage = new Sprite({
            image: Resources.startScreen,
            destSize: { width: 1700, height: 1000 }
        });

        const startScreenActor = new Actor({
            pos: new Vector(400, 300), 
            width: 800,
            height: 600
        });

        startScreenActor.graphics.use(startScreenImage);
        this.add(startScreenActor);

        this.gameNameLabel = new Label({
            text: 'Space Chicken',
            pos: new Vector(500, 100),
            color: Color.Blue,
            font: new Font({ size: 70 })
        });
        this.add(this.gameNameLabel);

        const totalCoins = localStorage.getItem("totalCoins");

        this.totalCoinsLabel = new Label({
            text: `Total Coins: ${totalCoins || 0}`,
            pos: new Vector(625, 250),
            color: Color.Black,
            font: new Font({ size: 30 }),
        });
        this.add(this.totalCoinsLabel);

        let coins = localStorage.getItem("coins");
        coins = coins ? coins : "0";

        const highScore = localStorage.getItem("highScore");
        const currentScore = parseInt(coins);

        if (!highScore || (currentScore && currentScore > parseInt(highScore))) {
            localStorage.setItem("highScore", currentScore.toString());
        }

        this.highScoreLabel = new Label({
            text: `High Score: ${localStorage.getItem("highScore") || 0}`,
            pos: new Vector(625, 300),
            color: Color.Black,
            font: new Font({ size: 30 }),
        });
        this.add(this.highScoreLabel);

        this.startLabel = new Label({
            text: 'Start Game',
            pos: new Vector(615, 450),
            color: Color.White,
            font: new Font({ 
                size: 50,
                bold: true
            }),
        });

        this.startLabel.on('pointerup', () => {
            localStorage.setItem("coins", "0");
            this.engine.goToScene('level1');
        });
        this.add(this.startLabel);
    }

    playBackgroundMusic() {
        Resources.gameOverThemeSong.stop();
        Resources.StartMusic.loop = true;
        Resources.StartMusic.play();
    }
}
