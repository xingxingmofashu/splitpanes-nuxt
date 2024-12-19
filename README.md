# Splitpanes Nuxt Module

This module integrates the [Splitpanes](https://github.com/antoniandre/splitpanes) component with Nuxt 3.

## Installation

```bash
npx nuxi@latest module add splitpanes-nuxt
```

or with Yarn:

```bash
npx nuxi@latest module add splitpanes-nuxt
```
## Usage

In your `nuxt.config.ts` (or `nuxt.config.js`), add the module:

```javascript
export default {
  modules: [
    'splitpanes-nuxt'
  ]
}
```

With this configuration, you can now use the `Splitpanes` and `Pane` components in your project. If you want to add a prefix to these component names, you can add a `splitpanes` configuration to your `nuxt.config.ts`:

```javascript
export default {
  modules: [
    'splitpanes-nuxt'
  ],
  splitpanes: {
    prefix: 'MyPrefix'
  }
}
```

This will allow you to use the components with a prefix, like so: `<MyPrefixSplitpanes />`, `<MyPrefixPane />`, etc.

## Further References

For detailed information about the Splitpanes component, its usage, options and events, please refer to the [official Splitpanes documentation](https://antoniandre.github.io/splitpanes/).

To contribute, submit issues or pull requests, visit the [Splitpanes GitHub repository](https://github.com/antoniandre/splitpanes).


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
