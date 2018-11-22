import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const babelOptions = () => ({
    exclude: 'node_modules/**',
    presets: [['@babel/env', { modules: false }], '@babel/react'],
    plugins: [
        '@babel/proposal-object-rest-spread'
    ]
});

export default [
    {
        input: 'src/index.js',
        output: {
            file: pkg.module,
            format: 'es',
        },
        external: ['react'],
        plugins: [babel(babelOptions())],
    },
    {
        input: 'src/index.js',
        output: {
            file: pkg.main,
            format: 'cjs',
            globals: {
                react: 'React'
            }
        },
        external: ['react'],
        plugins: [nodeResolve(), babel(babelOptions()), commonjs()],
    }
];