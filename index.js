import {customAlphabet} from 'nanoid';

const numberSet = '0123456789';
const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabet = `${numberSet}${uppercaseAlphabet}${lowercaseAlphabet}`;

const nowOnUTC = () => {
    const date = new Date();
    const now_utc = Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getMilliseconds(),
    );
    const dateUtc = new Date(now_utc);
    const Y = `${dateUtc.getFullYear()}`.slice(-2);
    const M = addZeroPrefix(dateUtc.getMonth() + 1);
    const D = addZeroPrefix(dateUtc.getDate());
    const H = addZeroPrefix(dateUtc.getHours());
    const m = addZeroPrefix(dateUtc.getMinutes());
    const s = addZeroPrefix(dateUtc.getSeconds());
    // const ms = addZeroPrefix(dateUtc.getMilliseconds());
    return `${Y + M + D}T${H}${m}${s}`;
};

const addZeroPrefix = num => +num > 10 ? `${num}` : `0${num}`;

const genId = (prefix = '', size = 4, randomSet = alphabet) => {
    const nnid = customAlphabet(randomSet, size);
    return `${prefix}${nowOnUTC()}_${nnid()}`;
};

export default genId;
