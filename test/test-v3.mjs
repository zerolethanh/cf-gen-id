import {genId} from '../';

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
