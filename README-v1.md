# cf-gen-id

---
Tạo id dựa trên thời gian và random ký tự.

## Tại sao?

- Có thể thêm prefix.
- Id có thời gian thân thiện, dễ nhìn.
- Mặc định có thể tạo 14.776.336 id/mỗi giây (62^4, 62 ký tự
  → `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`)

## Install:

```shell
yarn add cf-gen-id
or
npm i -S cf-gen-id
```

## Sử dụng:

```js
import genId from 'cf-gen-id';

const l = console.log
l(genId('user')); //user211115T150754_Qi1O : random 4 ký tự (mặc định)
l(genId('user', 3)); //user211116T090834_XOg : random 3 ký tự
l(genId('user', 5, '0123456789')); //user211116T091751_99635 : random 5 ký tự từ 0-9
```

## License:

MIT

## Author:

ClassFunc JSC (https://classfunc.com)

