import genId from '/Users/thanhle/WebstormProjects/cf-gen-id';

const l = console.log;

for (let i = 0; i < 1_000; ++i) {
    // console.log(typeof genId);
    const id = genId('user', 5);
    l(id);
}
