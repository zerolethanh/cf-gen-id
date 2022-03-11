export interface Options {
    size?: number,
    prefix?: string,
    date?: boolean,
    randomSet?: string
}

/**
 *
 * @param {Object} [options]
 * @param {number} [options.size=5] - size of random string
 * @param {string} [options.prefix=''] - prefix
 * @param {boolean} [options.date=false] - date format `YYMMDDTHHmmss_` before random string
 * @param {string} [options.randomSet='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'] - random set
 * @returns {string}
 */
export function genId(options?: Options): string;

/**
 *
 * @param {Object} [options]
 * @param {number} [options.size=5] - size of random string
 * @param {string} [options.prefix=''] - prefix
 * @param {string} [options.randomSet='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'] - random set
 * @returns {string}
 */
export function genDateId(options?: Options): string;

/**
 *
 * @param {string} [prefix='']
 * @param {Object} [options]
 * @param {number} [options.size=5] - size of random string
 * @param {boolean} [options.date=false] - date format `YYMMDDTHHmmss_` before random string
 * @param {string} [options.randomSet='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'] - random set
 * @returns {string}
 */
export function genDateIdPrefix(prefix?: string, options?: Options): string;
