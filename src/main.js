// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Contact from './components/Contact'
import Blog from './components/Blog'
import CV from './components/CV'
import Projet from './components/Projet'
import Projets from './components/Projets'
import Article from './components/Article'
import VuePrism from 'vue-prism'
import Vuelidate from 'vuelidate'
Vue.use(VuePrism)
Vue.use(Vuelidate)
import 'prismjs/themes/prism.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  
  {path: '/', component:Home},
  {path: '/Contact', component:Contact},
  {path: '/Blog', component:Blog},
  {path: '/CV', component:CV},
  {path: '/Projet/:id', component:Projet},
  {path: '/Projets', component:Projets},
  {path: '/Article/:id', component:Article}
]


const router = new VueRouter({
  routes,
  base: "/portfolio/",
  mode:'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

