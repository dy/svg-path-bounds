'use strict'

const parse = require('parse-svg-path')
const abs = require('abs-svg-path')
const normalize = require('normalize-svg-path')
const isSvgPath = require('is-svg-path')
const assert = require('assert')

module.exports = pathBounds


function pathBounds(path) {
  // ES6 string tpl call
  if (Array.isArray(path) && path.length === 1 && typeof path[0] === 'string') path = path[0]

  // svg path string
  if (typeof path === 'string') {
    assert(isSvgPath(path), 'String is not an SVG path.')
    path = parse(path)
  }

  assert(Array.isArray(path), 'Argument should be a string or an array of path segments.')

  path = abs(path)
  path = normalize(path)

  if (!path.length) return [0, 0, 0, 0]

  let bounds = [Infinity, Infinity, -Infinity, -Infinity]

  for (let i = 0, l = path.length; i < l; i++) {
    let points = path[i].slice(1)

    for (let j = 0; j < points.length; j += 2) {
      if (points[j + 0] < bounds[0]) bounds[0] = points[j + 0]
      if (points[j + 1] < bounds[1]) bounds[1] = points[j + 1]
      if (points[j + 0] > bounds[2]) bounds[2] = points[j + 0]
      if (points[j + 1] > bounds[3]) bounds[3] = points[j + 1]
    }
  }

  return bounds
}
