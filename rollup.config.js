import importMap from './src/plugin.js';

export default ({
  // map entry point(s) to output file(s)
  input: {
    plugin: 'src/plugin.js',
  },
  plugins: [importMap()],
  output: [{
    // output to the root directory
    dir: 'dist',
    entryFileNames: "[name]-[hash].js",
    format: 'es'
  }]
});