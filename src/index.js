/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
import {PixelUtil} from 'react-native-pixel-util';
import bmp from 'bmp-ts';

class PixelBitmap extends PixelUtil {
  parse(file) {
    return this.createBuffer(file).then(buffer => {
      const bitmap = bmp.decode(buffer, {toRGBA: true});
      const image = this.createImageData(bitmap.width, bitmap.height);
      this.set(image, bitmap);

      return [image];
    });
  }
}

export default new PixelBitmap();
export {PixelBitmap};
