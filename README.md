# react-native-pixel-bmp

[![npm version](http://img.shields.io/npm/v/react-native-pixel-bmp.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-bmp "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/react-native-pixel-bmp.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-bmp "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-native-pixel-bmp.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-bmp "View this project on npm")
[![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android%20%7C%20web-989898.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-bmp "View this project on npm")

> Parse Bitmap to ImageData for React Native.

## Installation
```bash
$ npm install react-native-pixel-bmp
```
For RN >= 0.65, run `npm install react-native-blob-util`.

For RN < 0.65, run `npm install react-native-blob-util@0.16.3`, and patch manually to [fix: with react-native-web product build will export 'URIUtil' (reexported as 'URIUtil') was not found](https://github.com/RonRadtke/react-native-blob-util/pull/201/files).
```js
var pixelBitmap= require('react-native-pixel-bmp');
console.log(pixelBitmap); //object
```

# API

## pixelBitmap.parse(`file`) -> promise.then(`images`)

return `images` is Array contains one `ImageData`.

```js
var file= 'https://59naga.github.io/fixtures/still.BMP';

pixelBitmap.parse(file).then(function(images){
  console.log(images[0]);
});
// {width: 128, height: 128, bitPP: 24, bottomUp: true, compression: 0, headerSize: 40, data: <Uint8Array ..>}
```

# Related projects
* [react-native-pixel-image](https://github.com/flyskywhy/react-native-pixel-image)
* [react-native-pixel-util](https://github.com/flyskywhy/react-native-pixel-util)
* [react-native-pixel-gif](https://github.com/flyskywhy/react-native-pixel-gif)
* [react-native-pixel-png](https://github.com/flyskywhy/react-native-pixel-png)
* [react-native-pixel-jpg](https://github.com/flyskywhy/react-native-pixel-jpg)
* __react-native-pixel-bmp__
* [react-native-pixel-webp](https://github.com/flyskywhy/react-native-pixel-webp)
* [pixel-to-ansi](https://github.com/59naga/pixel-to-ansi)
* [pixel-to-svg](https://github.com/59naga/pixel-to-svg)

License
---
[MIT][License]

[License]: http://59naga.mit-license.org/
