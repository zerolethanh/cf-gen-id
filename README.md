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
import {genId} from 'cf-gen-id'
// or with nodejs:
// const {genId} = require('cf-gen-id')
for (let i = 0; i < 10; ++i)
    console.log(genId()); // OCQtC
for (let i = 0; i < 10; ++i)
    console.log(genId({size: 20})); // 2YjfdI4YwlroottFsqid
for (let i = 0; i < 10; ++i)
    console.log(genId({prefix: 'user_'})); // user_AOi78
for (let i = 0; i < 10; ++i)
    console.log(genId({date: true, size: 10})); // 2203010T073347_8FNRWiJtzp
for (let j = 0; j < 10; ++j)
    console.log(genId({prefix: 'user_', date: true, size: 20})); //user_2203010T073347_jETGAx5RN9vRENo6udpz
```

## API:

`size`: default = 5 : Size of random string

`prefix`: default = '' : Prefix of random string

`date`: default = false : If true, prefix date format `YYMMDDTHHmmss_` before random string

`randomSet`: default = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`

## Author:

[ClassFunc Softwares JSC](https://classfunc.com)

## LICENSE:

MIT
