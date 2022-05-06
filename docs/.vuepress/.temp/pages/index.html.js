export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "footer": "MIT Licensed | Copyright © 2021-present Leo Wang"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "介绍",
      "slug": "介绍",
      "children": []
    },
    {
      "level": 2,
      "title": "站点导航",
      "slug": "站点导航",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1626223581000,
    "contributors": [
      {
        "name": "alin",
        "email": "alin.run@foxmail.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
