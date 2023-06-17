import esbuild from 'rollup-plugin-esbuild';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss'
import pkg from './package.json' assert  { type : "json"};

export default {
	input: 'src/index.js',
	output:[ 
		{
			file: pkg.exports['.'].import,
			format: 'cjs'
		},
		{
			file: pkg.exports['.'].require,
			format: 'esm'
		},
	],
	plugins: [
		esbuild({
		  // All options are optional
		  include: /\.jsx?$/, // default, inferred from `loaders` option
		  exclude: /node_modules/, // default
		  sourceMap: true, // default
		  minify: process.env.NODE_ENV === 'production',
		  target: 'es2017', // default, or 'es20XX', 'esnext'
		  jsx: 'transform', // default, or 'preserve'
		  jsxFactory: 'React.createElement',
		  jsxFragment: 'React.Fragment',
		  // Like @rollup/plugin-replace
		  define: {
			__VERSION__: '"x.y.z"',
		  },
		  tsconfig: 'tsconfig.json', // default
		  // Add extra loaders
		  loaders: {
			// Add .json files support
			// require @rollup/plugin-commonjs
			'.json': 'json',
			// Enable JSX in .js files too
			'.js': 'jsx',
		  },
		}),
		peerDepsExternal(),
		scss(), 
	],
	external : ['react','react-dom','sass'],
};