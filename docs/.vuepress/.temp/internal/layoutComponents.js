import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/leo/github.com/001_runlin/wiki/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/leo/github.com/001_runlin/wiki/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
