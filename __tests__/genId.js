import {
  genDateId,
  genDateIdPrefix,
  genId,
  genIdPrefix,
  genIdSize,
} from '../index.esm.js';

const log = (func) => {
  for (let i = 0; i < 5; ++i) {
    console.log(func());
  }
};

log(() => genId());
log(() => genId({prefix: 'data_', size: 8}));
log(() => genIdPrefix('id_', {size: 12}));
log(() => genDateId());
log(() => genDateIdPrefix('user_'));
log(() => genIdSize(20));
