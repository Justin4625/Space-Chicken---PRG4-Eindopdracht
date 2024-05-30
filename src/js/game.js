import '../css/style.css'
import { Engine } from "excalibur"
import { ResourceLoader } from './resources.js'
import { Level1 } from './level1'
import { GameOver } from './gameover'
import { Level2 } from './level2'
import { Start } from './start'

export class Game extends Engine {
    constructor() {
        super({ width: 1200, height: 700 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('start', new Start())
        this.add('level1', new Level1())
        this.add('level2', new Level2())
        this.add('gameOver', new GameOver());
        this.goToScene('start')
    }
}

const game = new Game()