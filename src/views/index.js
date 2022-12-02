const files = require.context('.', true, /\.vue$/);
let modules = {};
files.keys().forEach((key) => {
    if (key === './index.vue') return;
    // const tkey = key.toLowerCase().replace(/(\.\/|\/index.vue)/g, '');
    const tkey = key.replace(/(\.\/|\/index.vue)/g, '');
    modules = {
        ...modules,
        [tkey]: () => import('@/views/' + tkey),
    };
});

export default modules;
