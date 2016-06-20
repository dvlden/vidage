### Vidage.js
###### Your solution to Background Video & Image
---

**Vidage.js** will automatically hide and pause the video for touch devices and/or small screens (34em) and instead show the fallback image. It determines whether to do that or not, on the `canplay`, `resize` and `orientationchange` _(probably not necessery)_ events. It uses one module as dependency - `lodash/debounce`.

#### Demo
Take a look at this simple, yet - [beautiful example](https://dvLden.github.io/Vidage/).

#### CDN JS
###### Thanks to [PeterDaveHello](https://github.com/PeterDaveHello)
`https://cdnjs.com/libraries/Vidage`

#### Bower
`bower install vidage --save`

#### NPM
`npm install vidage --save`

#### How to use it
You may use Vidage on one of the following ways:

##### Add boilerplate/template in your HTML
```html
<div class="Vidage">
    <div class="Vidage__image"></div>

    <video id="VidageVideo" class="Vidage__video" preload="metadata" loop autoplay muted>
        <source src="videos/bg.webm" type="video/webm">
        <source src="videos/bg.mp4" type="video/mp4">
    </video>

    <div class="Vidage__backdrop"></div>
</div>
```

##### Regular way
```html
<script src="scripts/Vidage.min.js"></script>
<script>
    new Vidage(selector [, helperClass ]);
</script>
```

##### ES6 way
```javascript
import Vidage from './Vidage';

new Vidage(selector [, helperClass ]);
```
