### Vidage
###### Your solution to full-screen background video and image combined.
---

**Vidage.js** will automatically hide and pause the video for touch devices and/or small screens _(34em)_ and instead show the fallback image. It determines whether to do that or not, on the `canplay`, `resize` and `orientationchange` events. It uses one module as dependency - `lodash/debounce`.

### Demo
---
Take a look at this simple, yet - [beautiful example](https://dvLden.github.io/Vidage/).

### Install
---

#### CDN
`https://cdnjs.com/libraries/Vidage`
> Thanks to [PeterDaveHello](https://github.com/PeterDaveHello)

#### Bower
`bower install vidage --save`

#### NPM
`npm install vidage --save`

### How to use
---

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

And then use the script on one of the following ways:
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


**Tested manually through multiple platforms and browsers!**

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_128x128.png" width="48" height="48" alt="Chrome"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_128x128.png" width="48" height="48" alt="Firefox"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_128x128.png" width="48" height="48" alt="Safari"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_128x128.png" width="48" height="48" alt="Opera"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/edge/edge_128x128.png" width="48" height="48" alt="Edge"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/yandex/yandex_128x128.png" width="48" height="48" alt="Yandex"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_128x128.png" width="48" height="48" alt="Internet Explorer"> |
|---|---|---|---|---|---|---|
| 15+ ✔ | 20+ ✔ | 5.1+ ✔ | 15+ ✔ | 12+ ✔ | 14.12+ ✔ | Noop ✘ |

Unfortunately, I was unable to determine the issue on Internet Explorer. It just shows up the cover image, but never plays the video. :'(

If anyone can track down the issue, I'd appreciate the help!

> <img src="https://avatars0.githubusercontent.com/u/1119453?v=3&s=200" width="38" height="38">
_Thanks to [BrowserStack](https://www.browserstack.com/) for supporting this open-source project by allowing me to test Vidage!_
