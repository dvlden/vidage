### Vidage
##### Your solution to full-screen background video and image combined.
---
[![CDNJS](https://img.shields.io/cdnjs/v/vidage.svg?style=flat-square)](https://cdnjs.com/libraries/vidage)
[![npm](https://img.shields.io/npm/v/vidage.svg?style=flat-square)](https://www.npmjs.com/package/vidage)

**Vidage** will automatically handle your full-screen background video for you. It will hide and pause the video for touch devices and/or smaller width _(34em)_ and instead show the fallback image that you should provide. It determines whether to do that or not on the `canplay` and `resize` events.

#### Demo
---
Take a look at this simple, yet - [beautiful example](https://dvlden.github.io/vidage/).

#### Resources
---
Background video, fallback image and pattern overlay – **that were used in example**, are not included for download.
Use source file written in Sass `src/styles/vidage.scss` and change desired variables or change specific parts of code that you may not need for an specific project. If you're not familiar with SASS and would like to edit CSS instead, you can do that too. Distribution files are found within `dist` folder and specifically full path to CSS is `dist/vidage.css`.

#### Install
---

###### CDN
`https://cdnjs.com/libraries/vidage`

###### NPM
`npm i vidage`

#### How to use
---

###### Add boilerplate/template in your HTML
_You don't have to add both `.webm` and `.mp4` formats.
But from my personal experience, leaving `.mp4` as fallback and using `.webm` primarily
Works better and smoother in browsers that supports `.webm` format_

```html
<div class="vidage">
  <video id="vidage-instance" class="vidage-video" preload="metadata" loop autoplay muted>
    <source src="videos/bg.webm" type="video/webm">
    <source src="videos/bg.mp4" type="video/mp4">
  </video>
</div>
```

###### Add style in your `<head />` _(make sure that file path is correct)_

```html
<link href="dist/vidage.css" rel="stylesheet" />
```

###### Modify cover for the video
_Depending on how you use vidage's stylesheet, you may replace or override the 
background-image for the cover, which is within `.vidage::before` selector.
Alternatively, you may modify SCSS variable provided: `$vdg-fallback-image`
and fill in path of your fallback/cover image. Example: `url(../images/fallback.jpg)`._

##### And then use the script on one of the following ways _(make sure that file path is correct)_

###### Regular way
```html
<script src="dist/vidage.js"></script>
<script>
    new Vidage(selector, options);
</script>
```

###### ES6 way
```javascript
import Vidage from 'vidage';

new Vidage(selector, options);
```

#### Options
---
Vidage accepts a few options that you can pass through the object as second argument.

|  #  |      Option    |    Default    |  Type  |
| --- | -------------- | ------------- | ------ |
|  1  |  helperClass   | vidage-ready  | string |
|  2  |  videoRemoval  |     false     |  bool  |

1. Provided class will help Vidage to determine when to hide/show the background video or background image and when to pause/play the video.
2. Forcefully removes the whole video element from the DOM and when necessery (e.g. on resize if larger width detected) it will append the removed video again.

Example:
```javascript
import Vidage from 'vidage';

// Default options that you may change
new Vidage(selector, {
  helperClass: 'vidage-ready',
  videoRemoval: false
});
```

**Tested manually through multiple platforms and browsers!**

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_128x128.png" width="48" height="48" alt="Chrome"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_128x128.png" width="48" height="48" alt="Firefox"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_128x128.png" width="48" height="48" alt="Safari"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_128x128.png" width="48" height="48" alt="Opera"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_128x128.png" width="48" height="48" alt="Edge"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/yandex/yandex_128x128.png" width="48" height="48" alt="Yandex"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_128x128.png" width="48" height="48" alt="Internet Explorer"> |
|---|---|---|---|---|---|---|
| 15+ ✔ | 20+ ✔ | 5.1+ ✔ | 15+ ✔ | 12+ ✔ | 14.12+ ✔ | 10+ ✔ |

> <img src="https://avatars0.githubusercontent.com/u/1119453?v=3&s=200" width="38" height="38">
_Thanks to [BrowserStack](https://www.browserstack.com/) for supporting this open-source project by allowing me to test Vidage!_
