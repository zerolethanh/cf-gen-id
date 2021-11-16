import genId from './index.js';

const l = console.log;

for (let i = 0; i < 1_000; ++i) {
	const id = genId('user', 5, '0123456789');
	l(id);
}

