import {customAlphabet} from 'nanoid';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);
const numberSet = '0123456789';
const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabet = `${numberSet}${uppercaseAlphabet}${lowercaseAlphabet}`;

const nowOnUTC = () => dayjs.utc().format('YYMMDD\THHmmss');
//`${d.getFullYear()}${d.getMonth()}${d.getDate()}T${d.getHours()}${d.getMinutes()}${d.getSeconds()}`

const genId = (prefix = '', size = 4, randomSet = alphabet) => {
    const nnid = customAlphabet(randomSet, size);
    return `${prefix}${nowOnUTC()}_${nnid()}`;
};

export default genId;
