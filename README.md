# Generate your_UniqId;

//user_4yIvo

> For v1 & v2, [Read Here](README-v1.md)

## Install:

```shell
yarn add cf-gen-id
or
npm i -S cf-gen-id
```

## Usage:

```js
import {genId, genDateId, genDateIdPrefix} from 'cf-gen-id'
// or with nodejs:
// const {genId} = require('cf-gen-id')
console.log(genId()); // OCQtC
console.log(genId({size: 20})); // 2YjfdI4YwlroottFsqid
console.log(genId({prefix: 'user_'})); // user_AOi78
console.log(genDateId({size: 10})); // 2203010T073347_8FNRWiJtzp
console.log(genDateIdPrefix('user_', {size: 10})); //user_220311T175201_XIOJLwMdzh
```

## API:

```ts
function genId(options?: Options): string;

function genDateId(options?: Options): string;

function genDateIdPrefix(prefix?: string, options?: Options): string;
```

Options:

`size`: default = 5 : Size of random string

`prefix`: default = '' : Prefix of random string

`date`: default = false : If true, prefix date format `YYMMDDTHHmmss_` before random string

`randomSet`: default = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`

## Author:

[ClassFunc Softwares JSC](https://classfunc.com)

## LICENSE:

MIT
