var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj
    ? __defProp(obj, key,
        {enumerable: true, configurable: true, writable: true, value})
    : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import {customAlphabet} from 'nanoid';

const numberSet = '0123456789';
const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabet = `${numberSet}${uppercaseAlphabet}${lowercaseAlphabet}`;
const nowOnUTC = () => {
  const date = new Date();
  const now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
      date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(),
      date.getUTCSeconds(), date.getUTCMilliseconds());
  const dateUtc = new Date(now_utc);
  const Y = `${dateUtc.getUTCFullYear()}`.slice(-2);
  const M = addZeroPrefix(dateUtc.getUTCMonth() + 1);
  const D = addZeroPrefix(dateUtc.getUTCDate());
  const H = addZeroPrefix(dateUtc.getUTCHours());
  const m = addZeroPrefix(dateUtc.getUTCMinutes());
  const s = addZeroPrefix(dateUtc.getUTCSeconds());
  return `${Y + M + D}T${H}${m}${s}`;
};
const addZeroPrefix = (num) => +num > 10 ? `${num}` : `0${num}`;
const defaultOptions = {
  size: 5,
  prefix: '',
  date: false,
  randomSet: alphabet,
};
const genId = (options) => {
  const {size, prefix, date, randomSet} = __spreadValues(
      __spreadValues({}, defaultOptions), options);
  const nnid = customAlphabet(randomSet, size);
  if (!date) {
    return `${prefix}${nnid()}`;
  }
  return `${prefix}${nowOnUTC()}_${nnid()}`;
};
const genDateId = (options) => {
  return genId(getOptions(options, {date: true}));
};
const genDateIdPrefix = (prefix, options) => {
  return genId(getOptions(options, {date: true, prefix}));
};
const genIdSize = (size, options) => {
  return genId(getOptions(options, {size}));
};
const getOptions = (opts, otherOptions) => {
  return __spreadValues(
      __spreadValues(__spreadValues({}, defaultOptions), opts), otherOptions);
};
export {
  genDateId,
  genDateIdPrefix,
  genId,
  genIdSize,
};
