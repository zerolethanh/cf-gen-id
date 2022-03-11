import crypto from 'crypto';

const POOL_SIZE_MULTIPLIER = 128;
let pool, poolOffset;
let fillPool = bytes => {
    if (!pool || pool.length < bytes) {
        pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
        crypto.randomFillSync(pool);
        poolOffset = 0;
    } else if (poolOffset + bytes > pool.length) {
        crypto.randomFillSync(pool);
        poolOffset = 0;
    }
    poolOffset += bytes;
};
let random = bytes => {
    fillPool((bytes -= 0));
    return pool.subarray(poolOffset - bytes, poolOffset);
};
let customRandom = (alphabet, defaultSize, getRandom) => {
    let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1;
    let step = Math.ceil((1.6 * mask * defaultSize) / alphabet.length);
    return (size = defaultSize) => {
        let id = '';
        while (true) {
            let bytes = getRandom(step);
            let i = step;
            while (i--) {
                id += alphabet[bytes[i] & mask] || '';
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21) =>
    customRandom(alphabet, size, random);
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
export {genDateId, genDateIdPrefix, genId};
