# watermark-base64

![](https://img.shields.io/npm/dt/watermark-base64.svg)
![](https://img.shields.io/static/v1.svg?label=License&message=MIT&color=critical)

## Install

```bash
npm i watermark-base64
```

## Use

```html
<script type="text/javascript" src="dist/watermark-base64.min.js"></script>
// or
const watermarkBase64 = require('watermark-base64');
// or
import watermarkBase64 from 'watermark-base64';
```

## API

The unique API is: **watermarkBase64(text, options)**.
 
 - **text** (String): required, the text in the watermark image. 
 - **options** (Object): optional, the options of watermark, with keys below:
   - **width** (Number): default is `140`.
   - **height** (Number): default is `60`.
   - **color** (String): the text color, default is `#666666`.
   - **alpha** (Float): the text alpha(0 ~ 1), default is `0.1`.
   - **font** (String): the text font style, default is `18px Arial Bold`.

The api return **the base64 string of watermark image** which can be used in css background / img tag.

```js
watermarkBase64('北鱼游戏 888888');

watermarkBase64('北鱼游戏 888888', { color: '#f6dcd7' });

watermarkBase64('北鱼游戏 888888', { alpha: 0.5 });
```

## Build & Test

```bash
npm install

npm run build

npm test
```

## License

[MIT](https://cdn.jsdelivr.net/gh/cnguu/watermark-base64@master/LICENSE)
