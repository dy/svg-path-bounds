# svg-path-bounds [![test](https://github.com/dy/svg-path-bounds/actions/workflows/test.yml/badge.svg)](https://github.com/dy/svg-path-bounds/actions/workflows/test.yml)

Retrieve bounding box from svg path data.

[![npm install svg-path-bounds](https://nodei.co/npm/svg-path-bounds.png?mini=true)](https://npmjs.org/package/svg-path-bounds/)

```js
const getBounds = require('svg-path-bounds')

let [left, top, right, bottom] = getBounds('M0 0L10 10 20 0Z') // [0, 0, 20, 10]
```

### bounds = getBounds(path|segments)

Calculate bounding box for [svg path data](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d) string or [parsed path segments](https://www.npmjs.com/package/parse-svg-path) array. The box is detected by controlling points, not the real path.

## Related

* [parse-svg-path](https://npmjs.org/parse-svg-path) - return svg path data segments
* [abs-svg-path](https://npmjs.org/abs-svg-path) - convert svg path to absolute values
* [rel-svg-path](https://npmjs.org/abs-svg-path) - convert svg path to relative values
* [normalize-svg-path](https://npmjs.org/normalize-svg-path) - make path consist of only bezier curve segments
* [draw-svg-path](https://npmjs.org/draw-svg-path) - create canvas shape based on svg path data
* [normalize-svg-coords](https://npmjs.org/normalize-svg-coords) - bring svg path coordinates to any linear range

## Similar

* [svg-boundings](https://www.npmjs.com/package/svg-boundings)
* [svg-path-bounding-box](https://github.com/icons8/svg-path-bounding-box)

## License

MIT © Dmitry Iv.
