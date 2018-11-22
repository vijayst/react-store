import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const babelOptions = {
    babelrc: false,
    presets: [['env', { modules: false }], 'react'],
    plugins: [
        'transform-class-properties',
        'transform-object-rest-spread',
        'external-helpers',
    ]
};

export default [
    {
        input: 'src/index.js',
        output: {
            file: pkg.module,
            format: 'es',
        },
        external: ['react', 'raf'],
        plugins: [babel(babelOptions)],
    }
];