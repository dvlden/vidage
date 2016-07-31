### Vidage
###### Your solution to full-screen background video and image combined.
---

**Vidage.js** will automatically hide and pause the video for touch devices and/or small screens _(34em)_ and instead show the fallback image. It determines whether to do that or not, on the `canplay`, `resize` and `orientationchange` events. It uses one module as dependency - `lodash/debounce`.

### Demo
---
Take a look at this simple, yet - [beautiful example](https://dvLden.github.io/Vidage/).

### Resources
---
Background video, fallback image and pattern overlay – **that were used in example**, are not included for download.
Use source file written in SASS `src/styles/Vidage.scss` and change desired variables or change specific parts of code that you may not need in your project. If you're not familiar with SASS and would like to edit CSS directly, you can do that too. I strongly suggest using an beautifier _(point 1)_ so that you get clean code ready for changes. Once you're done, I suggest using an CSS Minifier _(point 2)_ to make it one-liner again. You can grab the CSS from `dest/styles/Vidage.css`.

1. [CleanCSS Beautify](http://www.cleancss.com/css-beautify/)
2. [CleanCSS Minify](http://www.cleancss.com/css-minify/)

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
_You don't have to add both `.webm` and `.mp4` formats._
_But from my personal experiance, leaving `.mp4` as fallback and using `.webm` primarily_
_Works better and smoother in browsers that supports `.webm` format_

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

##### Add style in your `<head />` _(make sure that file path is correct)_

```html
<link href="styles/Vidage.css" rel="stylesheet" />
```

##### And then use the script on one of the following ways _(make sure that file path is correct)_

###### Regular way
```html
<script src="scripts/Vidage.js"></script>
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

Unfortunately, I was unable to determine the issue on Internet Explorer. It just shows up the cover image, but never plays the video. :cry:

If anyone can track down the issue, I'd appreciate the help!

> <img src="https://avatars0.githubusercontent.com/u/1119453?v=3&s=200" width="38" height="38">
_Thanks to [BrowserStack](https://www.browserstack.com/) for supporting this open-source project by allowing me to test Vidage!_
