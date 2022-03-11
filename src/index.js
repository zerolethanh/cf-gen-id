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
        date.getUTCMilliseconds(),
    );
    const dateUtc = new Date(now_utc);
    const Y = `${dateUtc.getUTCFullYear()}`.slice(-2);
    const M = addZeroPrefix(dateUtc.getUTCMonth() + 1);
    const D = addZeroPrefix(dateUtc.getUTCDate());
    const H = addZeroPrefix(dateUtc.getUTCHours());
    const m = addZeroPrefix(dateUtc.getUTCMinutes());
    const s = addZeroPrefix(dateUtc.getUTCSeconds());
    // const ms = addZeroPrefix(dateUtc.getMilliseconds());
    return `${Y + M + D}T${H}${m}${s}`;
};

const addZeroPrefix = num => +num > 10 ? `${num}` : `0${num}`;
const defaultOptions = {
    size: 5,
    prefix: '',
    date: false,
    randomSet: alphabet,
};

/**
 *
 * @param {Object} [options=undefined]
 * @param {number} [options.size=5] - size of random string
 * @param {string} [options.prefix=''] - prefix
 * @param {boolean} [options.date=false] - date format `YYMMDDTHHmmss_` before random string
 * @param {string} [options.randomSet='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'] - random set
 * @returns {`${string}_${string}`|`${string}`}
 */
const genId = (options) => {
    const {size, prefix, date, randomSet} = {...defaultOptions, ...options};
    const nnid = customAlphabet(randomSet, size);
    if (!date) {
        return `${prefix}${nnid()}`;
    }
    return `${prefix}${nowOnUTC()}_${nnid()}`;
};

/**
 *
 * @param {Object} [options=undefined]
 * @param {number} [options.size=5] - size of random string
 * @param {string} [options.prefix=''] - prefix
 * @param {string} [options.randomSet='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'] - random set
 * @returns {`${string}_${string}`|`${string}`}
 */
const genDateId = (options) => {
    const opts = {
        ...defaultOptions,
        ...options,
        date: true,
    };
    return genId(opts);
};

/**
 *
 * @param {string} [prefix=''] - prefix
 * @param {Object} [options=undefined]
 * @param {number} [options.size=5] - size of random string
 * @param {string} [options.randomSet='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'] - random set
 * @returns {`${string}_${string}`|`${string}`}
 */
const genDateIdPrefix = (prefix, options) => {
    const opts = {
        ...defaultOptions,
        ...options,
        date: true,
        prefix,
    };
    return genId(opts);
};

export {
    genId,
    genDateId,
    genDateIdPrefix,
};
