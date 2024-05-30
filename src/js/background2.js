import { Sprite, Vector } from 'excalibur';
import { Resources } from './resources';
import { Background } from './background';

export class Background2 extends Background {

    onInitialize(engine) {
        console.log("Initializing background");
        this.sprite = new Sprite({
            image: Resources.Background2,
        });
        this.anchor = Vector.Zero;
        this.graphics.use(this.sprite);
    }

    onPostUpdate(engine, delta) {
        const scrollSpeed = 0.4;
        this.sprite.sourceView.x += scrollSpeed * delta;
    }
}
