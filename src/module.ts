import { defineNuxtModule, addComponent } from '@nuxt/kit'

export interface SplitpanesOption {
  prefix: string
}

export default defineNuxtModule<SplitpanesOption>({
  meta: {
    name: 'splitpanes-nuxt',
    configKey: 'splitpanes',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  setup(options, nuxt) {
    const prefix = options.prefix || nuxt.options.splitpanes?.prefix || '';

    (['Splitpanes', 'Pane'] as string[]).map(c => ({
      name: `${prefix}${c}`,
      filePath: 'splitpanes/dist/splitpanes.es.js',
      export: c,
    })).forEach((c) => {
      addComponent(c)
    })

    // Add slider css
    nuxt.options.css.unshift('splitpanes/dist/splitpanes.css')
  },
})

declare module '@nuxt/schema' {
  interface NuxtConfig {
    splitpanes?: SplitpanesOption
  }
  interface NuxtConfig {
    splitpanes?: SplitpanesOption
  }
}
