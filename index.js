import {customAlphabet} from 'nanoid';
import moment from 'moment';

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const now = () => moment().format('YYMMDDTHHmmss');
//`${d.getFullYear()}${d.getMonth()}${d.getDate()}T${d.getHours()}${d.getMinutes()}${d.getSeconds()}`

export const genId = ({prefix, size = 5, randomSet}) => {
	const nnid = customAlphabet(randomSet || alphabet, size);
	return `${prefix}_${now()}_${nnid()}`;
};
