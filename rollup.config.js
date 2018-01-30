import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: './src/DataFox.js',
  external: ['react', 'unfetch'],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify({
      mangle: {
        toplevel: true,
        properties: {
          regex: /^_/,
        },
      },
    }),
  ],
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  }
};
