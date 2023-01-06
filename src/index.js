/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const { PixelUtil } = require('pixel-util');
const bitmapJs = require('bmp-js');

class PixelBitmap extends PixelUtil {
  parse(file) {
    return this.createBuffer(file).then(buffer => {
      const bitmap = bitmapJs.decode(buffer);

      const image = this.createImageData(bitmap.width, bitmap.height);
      this.set(image, bitmap);

      return [image];
    });
  }
}

module.exports = new PixelBitmap();
module.exports.PixelBitmap = PixelBitmap;
