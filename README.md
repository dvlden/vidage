### Vidage
##### Your solution to full-screen background video and image combined.
---

**Vidage.js** will automatically handle your full-screen background video for you. It will hide and pause the video for touch devices and/or smaller width _(34em)_ and instead show the fallback image that you should provide. It determines whether to do that or not on the `canplay` and `resize` events.

#### Demo
---
Take a look at this simple, yet - [beautiful example](https://dvLden.github.io/Vidage/).

#### Resources
---
Background video, fallback image and pattern overlay – **that were used in example**, are not included for download.
Use source file written in SASS `src/styles/Vidage.scss` and change desired variables or change specific parts of code that you may not need for an specific project. If you're not familiar with SASS and would like to edit CSS instead, you can do that too. Distribution files are found within `dist` folder and specifically full path to CSS is `dist/styles/Vidage.css`.

#### Install
---

###### CDN
`https://cdnjs.com/libraries/Vidage`
> Thanks to [PeterDaveHello](https://github.com/PeterDaveHello)

###### Bower
`bower install vidage --save`

###### NPM
`npm install vidage --save`

#### How to use
---

###### Add boilerplate/template in your HTML
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

###### Add style in your `<head />` _(make sure that file path is correct)_

```html
<link href="styles/Vidage.css" rel="stylesheet" />
```

##### And then use the script on one of the following ways _(make sure that file path is correct)_

###### Regular way
```html
<script src="scripts/Vidage.js"></script>
<script>
    new Vidage(selector);
</script>
```

###### ES6 way
```javascript
import Vidage from './Vidage';

new Vidage(selector);
```

#### Options
---
Vidage accepts a few options that you can pass through the object as second argument.

|  #  |      Option    |    Default    |  Type  |
| --- | -------------- | ------------- | ------ |
|  1  |  helperClass   | Vidage--allow | string |
|  2  |  videoRemoval  |     false     |  bool  |

1. Provided class will help Vidage to determine when to hide/show the background video or background image and when to pause/play the video.
2. Forcefully removes the whole video element from the DOM and when necessery (e.g. on resize if larger width detected) it will append the removed video again.

Example:
```javascript
import Vidage from './Vidage';

// Default options that you may change
new Vidage(selector, {
    helperClass: 'Vidage--allow',
    videoRemoval: false
});
```

**Tested manually through multiple platforms and browsers!**

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_128x128.png" width="48" height="48" alt="Chrome"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_128x128.png" width="48" height="48" alt="Firefox"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_128x128.png" width="48" height="48" alt="Safari"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_128x128.png" width="48" height="48" alt="Opera"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/edge/edge_128x128.png" width="48" height="48" alt="Edge"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/yandex/yandex_128x128.png" width="48" height="48" alt="Yandex"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_128x128.png" width="48" height="48" alt="Internet Explorer"> |
|---|---|---|---|---|---|---|
| 15+ ✔ | 20+ ✔ | 5.1+ ✔ | 15+ ✔ | 12+ ✔ | 14.12+ ✔ | 10+ ✔ |

> <img src="https://avatars0.githubusercontent.com/u/1119453?v=3&s=200" width="38" height="38">
_Thanks to [BrowserStack](https://www.browserstack.com/) for supporting this open-source project by allowing me to test Vidage!_
