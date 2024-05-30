import { Actor, Sprite, Vector } from 'excalibur';
import { Resources } from './resources';

export class Background extends Actor {
    sprite;

    onInitialize(engine) {
        console.log("Initializing background");
        this.sprite = new Sprite({
            image: Resources.Background,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        });
        this.anchor = Vector.Zero;
        this.graphics.use(this.sprite);
    }

    onPostUpdate(engine, delta) {
        const scrollSpeed = 0.2;
        this.sprite.sourceView.x += scrollSpeed * delta;

        if (this.sprite.sourceView.x >= this.sprite.image.width) {
            this.sprite.sourceView.x = 0;
        }
    }
}
