import _ from 'lodash'

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = []
const viewFiles = require.context('src/views', true, /\.vue$/)
viewFiles.keys().forEach(key => {
  let view = viewFiles(key)
  let path = key.replace(/^\./, '').replace(/index\.vue$/, '/').replace(/\.vue$/, '').replace(/\/{2,}/g, '/')
  let name = key.replace(/^\./, '').replace(/\.vue$/, '').replace(/\/{2,}/g, '/').split('/').slice(1).join('-')
  // if (basename(path)[0] === '_') return
  let options = view.routerOptions || {}
  _.defaultsDeep(options, { path, params: '' })
  path += options.params
  routes.push({ component: view, path, name })
})

// import routes from 'src/routes'
_.merge(routes, require('src/routes').default)
console.log('Routes:', routes)

// Wildcard
// routes.push({ path: '*', redirect: '/' })

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: 'active',
  routes
})

export default router
