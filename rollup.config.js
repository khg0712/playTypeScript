import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import {terser} from "rollup-plugin-terser";

const config = [
    {
        input: 'src/index.js',
        output: [
            {file: 'dist/result.js', format: 'es', name: 'test'}],
        plugins: [
            resolve(),
            babel({
                plugins: ["@babel/plugin-proposal-class-properties"],
                exclude: 'node_modules/**' // only transpile our source code
            }),
            // terser({
            //     module: true,
            //     mangle: {
            //         reserved: ['src']
            //     }
            // })
        ]
    }
];

export default config