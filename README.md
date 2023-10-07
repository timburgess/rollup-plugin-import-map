# Rollup Import Map Plugin

This Rollup plugin generates an import map for all your entry points to their hashed filename. It's designed to work with filenames in the format of `[name]-[hash].js`.

If you're serving html via a traditional backend, the backend will likely use html templates that have script elements that reference the .js bundle(s).

Rollup can build assets with a hash suffix e.g. base-4KxXYrTd.js to prevent cache issues when new JS bundles are served. As browsers now support import maps,
this plugin can generate an `import-map.json` file. The backend can then incorporate the import map into the html template. On page load, the browser will
use the import map to load `base-4KxXYrTd.js` for the `base.js` file.

See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap for the MDN Import Map reference.


## Installation

Using npm:

`npm install --save-dev TODO`

## Usage

Add the plugin to your `rollup.config.js`:

```
import importMap from 'rollup-plugin-import-map'

export default {
  input: {
    // your entry points here
  },
  output: {
    dir: 'dist',
    format: 'esm',
    entryFileNames: '[name]-[hash].js',
  },
  plugins: [importMap()]
}
```

With the `import-map.json` now being created, add a `<script type="importmap" src="import-map.json"></script>` to the html template.

