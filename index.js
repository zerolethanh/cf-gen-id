import {customAlphabet} from 'nanoid';
import {DateTime} from 'luxon';

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nowOnUTC = () => DateTime.now().toUTC().toFormat('yyMMdd\'T\'hhmmss');
//`${d.getFullYear()}${d.getMonth()}${d.getDate()}T${d.getHours()}${d.getMinutes()}${d.getSeconds()}`

const genId = (prefix = '', size = 4, randomSet = alphabet) => {
    const nnid = customAlphabet(randomSet, size);
    return `${prefix}${nowOnUTC()}_${nnid()}`;
};

export default genId;
