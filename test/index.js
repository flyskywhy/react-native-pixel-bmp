/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const pixelBitmap = require('../src').default;
const fixture = require('fixture-images').still.bmp;

// Specs
describe('pixelBitmap', () =>
  it('.parse', done =>
    pixelBitmap.parse(fixture).then(function(images) {
      const image = images[0];

      expect(image.width).toBe(128);
      expect(image.height).toBe(128);
      expect(image.data != null ? image.data.length : undefined).toBe(
        image.width * image.height * 4
      );

      return done();
    })));
