import genId from './index.js';

for (let i = 0; i < 100_000; ++i) {
	const id = genId('user');
	console.log(id);
}

