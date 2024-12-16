import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'splitpanes-nuxt',
    configKey: 'splitpanes',
  },
  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const runtimeDir = resolve('./runtime')

    addPlugin({
      src: resolve(runtimeDir, 'plugin'),
    })
  },
})
