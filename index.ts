import {customAlphabet} from "nanoid";

const numberSet = "0123456789";
const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabet = `${numberSet}${uppercaseAlphabet}${lowercaseAlphabet}`;
const nowOnUTC = () => {
    const date = new Date();
    const now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    const dateUtc = new Date(now_utc);
    const Y = `${dateUtc.getUTCFullYear()}`.slice(-2);
    const M = addZeroPrefix(dateUtc.getUTCMonth() + 1);
    const D = addZeroPrefix(dateUtc.getUTCDate());
    const H = addZeroPrefix(dateUtc.getUTCHours());
    const m = addZeroPrefix(dateUtc.getUTCMinutes());
    const s = addZeroPrefix(dateUtc.getUTCSeconds());
    return `${Y + M + D}T${H}${m}${s}`;
};
const addZeroPrefix = (num: number) => +num > 10 ? `${num}` : `0${num}`;
const defaultOptions = {
    size: 5,
    prefix: "",
    date: false,
    randomSet: alphabet
};

export interface IOptions {
    prefix?: string,
    date?: boolean,
    size?: number,
    randomSet?: string
}

const genId = (options?: IOptions) => {
    const {size, prefix, date, randomSet} = {...defaultOptions, ...options};
    const nnid = customAlphabet(randomSet, size);
    if (!date) {
        return `${prefix}${nnid()}`;
    }
    return `${prefix}${nowOnUTC()}_${nnid()}`;
};
const genIdPrefix = (prefix: string, options?: IOptions) => {
    return genId(getOptions(options, {prefix}))
}
const genDateId = (options?: IOptions) => {
    return genId(getOptions(options, {date: true}));
};
const genDateIdPrefix = (prefix: string, options?: IOptions) => {
    return genId(getOptions(options, {date: true, prefix}));
};
const genIdSize = (size: number, options?: IOptions) => {
    return genId(getOptions(options, {size}))
}

//helpers
const getOptions = (opts?: IOptions, otherOptions?: IOptions) => {
    return {
        ...defaultOptions,
        ...opts,
        ...otherOptions
    }
}
export {
    genId,
    genIdPrefix,
    genIdSize,
    genDateId,
    genDateIdPrefix,
};
