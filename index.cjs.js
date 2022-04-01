var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var cf_gen_id_exports = {};
__export(cf_gen_id_exports, {
  genDateId: () => genDateId,
  genDateIdPrefix: () => genDateIdPrefix,
  genId: () => genId,
  genIdPrefix: () => genIdPrefix,
  genIdSize: () => genIdSize
});
var import_nanoid = require("nanoid");
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
const addZeroPrefix = (num) => +num > 10 ? `${num}` : `0${num}`;
const defaultOptions = {
  size: 5,
  prefix: "",
  date: false,
  randomSet: alphabet
};
const genId = (options) => {
  const { size, prefix, date, randomSet } = __spreadValues(__spreadValues({}, defaultOptions), options);
  const nnid = (0, import_nanoid.customAlphabet)(randomSet, size);
  if (!date) {
    return `${prefix}${nnid()}`;
  }
  return `${prefix}${nowOnUTC()}_${nnid()}`;
};
const genIdPrefix = (prefix, options) => {
  return genId(getOptions(options, { prefix }));
};
const genDateId = (options) => {
  return genId(getOptions(options, { date: true }));
};
const genDateIdPrefix = (prefix, options) => {
  return genId(getOptions(options, { date: true, prefix }));
};
const genIdSize = (size, options) => {
  return genId(getOptions(options, { size }));
};
const getOptions = (opts, otherOptions) => {
  return __spreadValues(__spreadValues(__spreadValues({}, defaultOptions), opts), otherOptions);
};
module.exports = __toCommonJS(cf_gen_id_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  genDateId,
  genDateIdPrefix,
  genId,
  genIdPrefix,
  genIdSize
});
