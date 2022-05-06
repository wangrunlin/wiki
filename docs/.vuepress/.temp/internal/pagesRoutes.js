import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-22a39d25","/about.html",{"title":""},["/about","/about.md"]],
  ["v-fc7eed0e","/exception/",{"title":""},["/exception/index.html","/exception/README.md"]],
  ["v-13187fc8","/cs-study-way/",{"title":"CS 学习路线"},["/cs-study-way/index.html","/cs-study-way/README.md"]],
  ["v-38bc823c","/install-config/",{"title":""},["/install-config/index.html","/install-config/README.md"]],
  ["v-702d7c2c","/install-config/jdk.html",{"title":""},["/install-config/jdk","/install-config/jdk.md"]],
  ["v-d948bc4e","/install-config/mysql.html",{"title":""},["/install-config/mysql","/install-config/mysql.md"]],
  ["v-d440f426","/tools/",{"title":""},["/tools/index.html","/tools/README.md"]],
  ["v-65e6349e","/study-website/",{"title":""},["/study-website/index.html","/study-website/README.md"]],
  ["v-38625b1d","/install-config/linux/",{"title":""},["/install-config/linux/index.html","/install-config/linux/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
