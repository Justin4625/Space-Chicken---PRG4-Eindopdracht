import { Actor, CollisionType, Keys, Vector } from "excalibur";
import { Resources } from "./resources";
import { Cactus } from "./cactus";
import { Rocket } from "./rocket";

export class Chicken extends Actor {

    constructor() {
        super({
            width: 70,
            height: 110,
            name: 'Chicken',
            collisionType: CollisionType.Active
        })
    }

    onInitialize(engine) {
        console.log("Chicken created");

        this.graphics.use(Resources.Chicken.toSprite());

        let sprite = this.graphics.current;
        if (sprite) {
            sprite.flipHorizontal = true;
        }

        this.pos = new Vector(200, 380)
        this.vel = new Vector(0, 0)

        this.on('collisionstart', (event) => this.hitSomething(event))
        this.on('exitviewport', (event) => this.die())
    }

    hitSomething(event) {
        if (event.other instanceof Cactus) {
            console.log('Chicken hit a cactus!');
            this.die();
        }

        if (event.other instanceof Rocket) {
            console.log('Chicken hit a Rocket!');
            this.die();
        }
    }

    die() {
        console.log('Chicken died!');
        if (this.scene) {
            console.log('Switching to game over scene');
            this.scene.engine.goToScene('gameOver');
        }
    }

    onPostUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -600;
        }

        if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 600;
        }

        this.vel = new Vector(xspeed, yspeed);

        const backgroundWidth = engine.drawWidth * 2;
        const backgroundHeight = engine.drawHeight * 2;

        const halfWidth = this.width / 2;
        const halfHeight = this.height / 2;
        this.pos.x = Math.max(halfWidth, Math.min(this.pos.x, backgroundWidth - halfWidth));
        this.pos.y = Math.max(halfHeight, Math.min(this.pos.y, backgroundHeight - halfHeight));
    }
}