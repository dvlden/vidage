# Vidage

This JS module will treat video as a background. It will determine when to hide/show & pause/play the video.
Touch devices and/or smaller devices with width of **34em** will display image provided as fallback.


## Installation (pick one)

1. [Download latest release](https://github.com/dvlden/vidage/releases)
2. `git clone https://github.com/dvlden/vidage.git`
3. `yarn add vidage`
4. `npm i vidage`


## CDN (pick one)

1. [JSDelivr](https://www.jsdelivr.com/package/npm/vidage?path=dist)
2. [UNPKG](https://unpkg.com/vidage@latest/dist/)


## Usage

Preferred way...

> Add base structure and replace video source paths

```html
<div class="vidage">
  <video id="vidage" class="vidage-video" preload="metadata" loop autoplay muted>
    <source src="videos/bg.webm" type="video/webm">
    <source src="videos/bg.mp4" type="video/mp4">
  </video>
</div>
```

> Setup and import required styles

```scss
// set the fallback-cover image
$vdg-fallback-image: url('../images/fallback.jpg');

// import package
@import '~vidage/src/styles/vidage';
```

> Import the JS module and create new instance

```js
import Vidage from 'vidage'

new Vidage('#vidage')
```

---

Old fashioned way...

> Below you will find complete `html` example...

```html
<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Document</title>

    <link rel="stylesheet" href="dist/vidage.css">
    <style>
      /* Override the cover image. Set the path to the actual image... */
      .vidage::before {
        background-image: url('images/fallback.jpg');
      }
    </style>
  </head>

  <body>
    <div class="vidage">
      <video id="vidage" class="vidage-video" preload="metadata" loop autoplay muted>
        <source src="videos/bg.webm" type="video/webm">
        <source src="videos/bg.mp4" type="video/mp4">
      </video>
    </div>

    <!-- START: Rest of your site content -->
    ...
    <!-- END: Rest of your site content -->

    <script src="dist/vidage.js"></script>
    <script>
      new Vidage('#vidage')
    </script>
  </body>
</html>
```

## JS Arguments

Instance of Vidage accepts two arguments. First argument is 
the actual selector of the video, that instance will control.
Second argument is the actual object for the options.

| Argument   | Required Type |
| ---------- | ------------- |
| `selector` | `string/node` |
| `options`  | `object`      | 

| Key            | Default Value  | Required Type |
| -------------- | -------------- | ------------- |
| `helperClass`  | `vidage-ready` | `string`      |
| `videoRemoval` | `false`        | `bool`        |


## SCSS Variables

| Variable              | Default Value                |
| --------------------- | ---------------------------- |
| `$vdg-fallback-image` | `url('../images/cover.jpg')` |


## Browser Support

Yet to be determined. All modern browsers should be alright.
