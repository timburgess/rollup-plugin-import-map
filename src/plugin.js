
export default function importMap () {
  return {
    name: 'import-map',
    generateBundle(options, bundle) {
      const importMap = {
        imports: {}
      }

      for (const [filename, chunk] of Object.entries(bundle)) {
        if (chunk.isEntry) {
          // assume the format of the entry name is "[name]-[hash].js"
          const [name, hashWithJs] = filename.split('-')
          const hash = hashWithJs.split('.')[0]

          importMap.imports[name] = `${name}-${hash}.js`
        }
      }

      this.emitFile({
        type: 'asset',
        fileName: 'import-map.json',
        source: JSON.stringify(importMap, null, 2)
      })
    }
  }
}
