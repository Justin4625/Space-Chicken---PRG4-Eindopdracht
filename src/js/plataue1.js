import { Actor, CollisionType } from 'excalibur';
import { Resources } from './resources';

export class Plateau1 extends Actor { 
   
    constructor() {
        super({
            width: 100,
            height: 120,
            name: 'Plateau1',
            collisionType: CollisionType.Fixed
        })
    }
    onInitialize(engine) {
        this.sprite = Resources.Plateau1.toSprite()
        this.graphics.use(this.sprite)

        this.pos.y = 178
    }
}