# Rollup Import Map Plugin

This Rollup plugin generates an import map for all your entry points with their hashed filename. It's designed to work with filenames in the format of `[name]-[hash].js`.

## Installation

Using npm:

\`\`\`bash
npm install --save-dev TODO
\`\`\`

## Usage

Add the plugin to your `rollup.config.js`:

\`\`\`javascript
import importMap from 'rollup-plugin-import-map';

export default {
  input: {
    // your entry points here
  },
  output: {
    dir: 'dist',
    format: 'esm',
    entryFileNames: '[name]-[hash].js',
    chunkFileNames: '[name]-[hash].js'
  },
  plugins: [importMap()]
};
\`\`\
