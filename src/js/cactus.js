import { Actor, CollisionType, Keys, Vector } from "excalibur";
import { Resources } from './resources';
import { Plateau1 } from "./plataue1";


export class Cactus extends Actor {

    constructor() {
        super({
            width: 180,
            height: 360,
            name: 'Cactus',
            collisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine) {
        console.log("Cactus created");
        this.graphics.use(Resources.Cactus.toSprite());

        this.pos = new Vector(1300, 700)
        this.vel = new Vector(-900, 0)

        this.on("exitviewport", (event) => this.resetCactus(event))

        let plateau1 = new Plateau1();
        this.addChild(plateau1);
        plateau1.scale = new Vector(.5, .5)

    }

    resetCactus(event) {
        this.pos = new Vector(1500, Math.random() * 700)
    }
}