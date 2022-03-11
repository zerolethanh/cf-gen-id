import {customAlphabet} from 'nanoid';

const numberSet = '0123456789';
const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabet: string = `${numberSet}${uppercaseAlphabet}${lowercaseAlphabet}`;

const nowOnUTC = (): string => {
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

const addZeroPrefix = (num): string => +num > 10 ? `${num}` : `0${num}`;

export interface Options {
    size?: number,
    prefix?: string,
    date?: boolean,
    randomSet?: string
}

const defaultOptions: Options = {
    size: 5,
    prefix: '',
    date: false,
    randomSet: alphabet,
};

const genId = (options?: Options): string => {
    const {size, prefix, date, randomSet} = {...defaultOptions, ...options};
    const nnid = customAlphabet(randomSet, size);
    if (!date) {
        return `${prefix}${nnid()}`;
    }
    return `${prefix}${nowOnUTC()}_${nnid()}`;
};


const genDateId = (options?: Options): string => {
    const opts = {
        ...defaultOptions,
        ...options,
        date: true,
    };
    return genId(opts);
};


const genDateIdPrefix = (prefix?: string, options?: Options): string => {
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
