import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from './resources';

export class Rocket extends Actor {

    constructor() {
        super({
            width: 200,
            height: 170,
            name: 'Rocket',
            collisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine) {
        console.log("Rocket created");
        this.graphics.use(Resources.Rocket.toSprite());

        this.vel = new Vector(-1100, 0);

        this.on("exitviewport", (event) => this.resetRocket(event));
    }

    resetRocket(event) {
        this.pos = new Vector(1500, Math.random() * 700);
    }
}
