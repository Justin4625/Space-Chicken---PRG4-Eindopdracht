import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    startScreen: new ImageSource('images/startscreen.png'),
    Chicken: new ImageSource('images/bird.png'),
    Background: new ImageSource('images/desert.jpeg', { wrapping: ImageWrapping.Repeat}),
    Background2: new ImageSource('images/city.jpeg', { wrapping: ImageWrapping.Repeat}),
    Cactus: new ImageSource('images/cactus.png'),
    Rocket: new ImageSource('images/rocket.png'),
    Plateau1: new ImageSource('images/plateau1.png'),
    Coin: new ImageSource('images/coin.png'),
    StartMusic: new Sound('sounds/startmusic.mp3'),
    ThemeSong: new Sound('sounds/kichijoji.mp3'),
    ThemeSong2: new Sound('sounds/themesong2.mp3'),
    gameOverThemeSong: new Sound('sounds/gameOver.mp3'),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }