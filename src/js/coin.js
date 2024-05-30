// coin.js
import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from './resources';
import { Chicken } from "./chicken";

export class Coin extends Actor {

    constructor(level) {
        super({
            radius: Resources.Coin.width / 4,
            name: 'Coin',
            collisionType: CollisionType.Passive
        })
        this.level = level;
    }

    onInitialize(engine) {
        console.log("Coin created");
        this.graphics.use(Resources.Coin.toSprite());

        this.pos = new Vector(1300, 700)
        this.vel = new Vector(-900, 0)

        this.on("exitviewport", (event) => this.resetCoin(event))
        this.on('collisionstart', (event) => this.hitSomething(event))

    }

    resetCoin(event) {
        this.pos = new Vector(1400, Math.random() * 500);
        this.vel = new Vector(-900, 0); 
        console.log("Coin reset to new position:", this.pos);
    }

    hitSomething(event) {
        if (event.other instanceof Chicken) {
            console.log("Coin hit a Chicken, respawning...");
            this.level.addCoin();
            this.level.addTotalCoins(); 
            this.resetCoin(); 
        }
    }    
}
