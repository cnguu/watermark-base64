// eslint-disable-next-line no-unused-expressions
!(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(root)
    module.exports.default = module.exports
  } else {
    root.watermarkBase64 = factory(root)
  }
}(typeof window !== 'undefined' ? window : this, function () {
  var canvas, ctx

  function mergeOptions (options) {
    return Object.assign({
      width: 140,
      height: 60,
      color: '#666666',
      alpha: 0.1,
      font: '18px Arial Bold',
    }, options)
  }

  return function (text, options) {
    if (!canvas || !ctx) {
      if (typeof document !== 'undefined') {
        canvas = document.createElement('canvas')
      } else {
        // eslint-disable-next-line no-eval
        var Canvas = eval('module.require("canvas")')
        canvas = new Canvas()
      }
      ctx = canvas && canvas.getContext && canvas.getContext('2d')
      if (!canvas || !ctx) return ''
    }
    options = mergeOptions(options)
    var width = options.width
    var height = options.height
    canvas.width = width
    canvas.height = height
    ctx.clearRect(0, 0, width, height)
    ctx.globalAlpha = 0
    ctx.fillRect(0, 0, width, height)
    ctx.globalAlpha = options.alpha
    ctx.fillStyle = options.color
    ctx.font = options.font
    ctx.textAlign = 'left'
    ctx.textBaseline = 'bottom'
    ctx.translate(width * 0.1, height * 0.9)
    ctx.rotate(-Math.PI / 12)
    ctx.fillText(text, 0, 0)
    return canvas.toDataURL()
  }
}))
