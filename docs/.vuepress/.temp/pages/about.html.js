export const data = {
  "key": "v-22a39d25",
  "path": "/about.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Hi 👋 , I'm Leo",
      "slug": "hi-👋-i-m-leo",
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
  "filePathRelative": "about.md"
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
