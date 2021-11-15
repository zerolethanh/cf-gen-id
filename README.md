# genId

---
Tạo id dựa trên thời gian và random ký tự.

## Tại sao?

- Có thể thêm prefix.
- Id có thời gian thân thiện, dễ nhìn.
- Mặc định có thể tạo 557.845 id/mỗi giây (tổ hợp chập 4 của 62 ký
tự `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`)

## Install:

> yarn add cf-gen-id
>
> or
>
> npm i -S cf-gen-id

## Sử dụng:

```js
import genId from './index';

const id = genId('user'); //user211115T150754_Qi1O
```

## License:
MIT

## Author:
ClassFunc JSC (https://classfunc.com)

