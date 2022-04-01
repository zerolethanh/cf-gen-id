export interface IOptions {
    prefix?: string;
    date?: boolean;
    size?: number;
    randomSet?: string;
}
declare const genId: (options?: IOptions | undefined) => string;
declare const genIdPrefix: (prefix: string, options?: IOptions | undefined) => string;
declare const genDateId: (options?: IOptions | undefined) => string;
declare const genDateIdPrefix: (prefix: string, options?: IOptions | undefined) => string;
declare const genIdSize: (size: number, options?: IOptions | undefined) => string;
export { genId, genIdPrefix, genIdSize, genDateId, genDateIdPrefix, };
