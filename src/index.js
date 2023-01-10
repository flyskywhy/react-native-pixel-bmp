/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
import {PixelUtil} from 'react-native-pixel-util';
import bitmapJs from 'bmp-js';

class PixelBitmap extends PixelUtil {
  parse(file) {
    return this.createBuffer(file).then(buffer => {
      // to avoid
      //     Uncaught (in promise) ReferenceError: Buffer is not defined
      //         at BmpDecoder.parseBGR (decoder.js:75)
      // in bmp-js@0.0.3 on Web
      if (typeof Buffer === 'undefined') {
        global.Buffer = require('buffer').Buffer;
      }

      const bitmap = bitmapJs.decode(buffer);
      const image = this.createImageData(bitmap.width, bitmap.height);
      this.set(image, bitmap);

      return [image];
    });
  }
}

export default new PixelBitmap();
export {PixelBitmap};
