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
import {
  genDateId,
  genDateIdPrefix,
  genId,
  genIdPrefix,
  genIdSize,
} from 'cf-gen-id';

const log = (func) => {
  for (let i = 0; i < 5; ++i) {
    console.log(func());
  }
};

log(() => genId());//yB364
log(() => genId({prefix: 'data_', size: 8}));//data_ArPxpi85
log(() => genIdPrefix('id_', {size: 12}));//id_4jfMDSSMLTz6
log(() => genDateIdPrefix('user_'));//user_220401T051921_NB0a2
log(() => genDateId({size: 10}));//220401T051921_jxWwNaQaUU
log(() => genIdSize(20));//SXXO75OG7Ds3mJ9L37q4

```

## API:

```ts
 interface IOptions {
    prefix?: string;
    date?: boolean;
    size?: number;
    randomSet?: string;
}
 const genId: (options?: IOptions | undefined) => string;
 const genIdPrefix: (prefix: string, options?: IOptions | undefined) => string;
 const genDateId: (options?: IOptions | undefined) => string;
 const genDateIdPrefix: (prefix: string, options?: IOptions | undefined) => string;
 const genIdSize: (size: number, options?: IOptions | undefined) => string;

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
